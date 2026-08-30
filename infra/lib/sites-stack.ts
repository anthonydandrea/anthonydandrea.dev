import * as cdk from 'aws-cdk-lib';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { DOMAIN, sites, AmplifySite, CloudFrontSite } from '../sites';

interface SitesStackProps extends cdk.StackProps {
  hostedZone: route53.IHostedZone;
}

export class SitesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SitesStackProps) {
    super(scope, id, props);

    const { hostedZone } = props;

    for (const site of sites) {
      if (site.type === 'amplify') {
        this.addAmplifySite(site);
      } else {
        this.addCloudfrontSite(site, hostedZone);
      }
    }
  }

  private addAmplifySite(site: AmplifySite) {
    const prefix = site.subdomain ?? '';
    const logicalId = site.subdomain ? `AmplifyDomain-${site.subdomain}` : 'AmplifyDomain-apex';
    const branch = site.branch ?? 'main';

    const subDomainSettings: amplify.CfnDomain.SubDomainSettingProperty[] = [
      { branchName: branch, prefix },
    ];

    // Apex also gets www
    if (!site.subdomain) {
      subDomainSettings.push({ branchName: branch, prefix: 'www' });
    }

    new amplify.CfnDomain(this, logicalId, {
      appId: site.amplifyAppId,
      domainName: DOMAIN,
      subDomainSettings,
    });
  }

  private addCloudfrontSite(site: CloudFrontSite, hostedZone: route53.IHostedZone) {
    new route53.CnameRecord(this, `Cname-${site.subdomain}`, {
      zone: hostedZone,
      recordName: site.subdomain,
      domainName: site.cloudfrontDomain,
      ttl: cdk.Duration.minutes(5),
    });
  }
}
