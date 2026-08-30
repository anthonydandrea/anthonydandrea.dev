import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { DOMAIN } from '../sites';

export class DnsStack extends cdk.Stack {
  public readonly hostedZone: route53.PublicHostedZone;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.hostedZone = new route53.PublicHostedZone(this, 'HostedZone', {
      zoneName: DOMAIN,
    });

    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', this.hostedZone.hostedZoneNameServers!),
      description: 'Set these as NS records at Squarespace registrar to complete migration',
    });

    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: this.hostedZone.hostedZoneId,
    });
  }
}
