import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { DOMAIN, CF_HOSTED_ZONE_ID, ACM_VALIDATION, sites } from '../sites';

interface SitesStackProps extends cdk.StackProps {
  hostedZone: route53.IHostedZone;
}

export class SitesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SitesStackProps) {
    super(scope, id, props);

    const { hostedZone } = props;

    // ACM cert validation record (shared across Amplify-managed domains)
    new route53.CnameRecord(this, 'AcmValidation', {
      zone: hostedZone,
      recordName: ACM_VALIDATION.name,
      domainName: ACM_VALIDATION.value,
      ttl: cdk.Duration.minutes(5),
    });

    for (const site of sites) {
      if (site.subdomain === null) {
        // Apex: Route 53 ALIAS A record (CNAME not allowed at apex)
        new route53.CfnRecordSet(this, 'ApexAlias', {
          hostedZoneId: hostedZone.hostedZoneId,
          name: `${DOMAIN}.`,
          type: 'A',
          aliasTarget: {
            dnsName: site.cloudfrontDomain,
            hostedZoneId: CF_HOSTED_ZONE_ID,
            evaluateTargetHealth: false,
          },
        });

        // www CNAME
        new route53.CnameRecord(this, 'WwwCname', {
          zone: hostedZone,
          recordName: 'www',
          domainName: site.cloudfrontDomain,
          ttl: cdk.Duration.minutes(5),
        });
      } else {
        new route53.CnameRecord(this, `Cname-${site.subdomain}`, {
          zone: hostedZone,
          recordName: site.subdomain,
          domainName: site.cloudfrontDomain,
          ttl: cdk.Duration.minutes(5),
        });
      }
    }
  }
}
