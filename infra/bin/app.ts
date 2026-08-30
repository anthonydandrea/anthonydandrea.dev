import * as cdk from 'aws-cdk-lib';
import { DnsStack } from '../lib/dns-stack';
import { SitesStack } from '../lib/sites-stack';
import { OidcStack } from '../lib/oidc-stack';
import { AWS_ACCOUNT, AWS_REGION } from '../sites';

const app = new cdk.App();
const env = { account: AWS_ACCOUNT, region: AWS_REGION };

const dnsStack = new DnsStack(app, 'DnsStack', { env });

new SitesStack(app, 'SitesStack', {
  env,
  hostedZone: dnsStack.hostedZone,
});

new OidcStack(app, 'OidcStack', { env });
