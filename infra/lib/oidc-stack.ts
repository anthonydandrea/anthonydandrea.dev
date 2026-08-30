import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { AWS_ACCOUNT, GITHUB_REPO } from '../sites';

export class OidcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const provider = new iam.OpenIdConnectProvider(this, 'GitHubOidc', {
      url: 'https://token.actions.githubusercontent.com',
      clientIds: ['sts.amazonaws.com'],
    });

    const role = new iam.Role(this, 'GitHubDeployRole', {
      roleName: 'github-deploy-role',
      assumedBy: new iam.WebIdentityPrincipal(provider.openIdConnectProviderArn, {
        StringEquals: {
          'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
          'token.actions.githubusercontent.com:sub': `repo:${GITHUB_REPO}:ref:refs/heads/main`,
        },
      }),
      inlinePolicies: {
        CdkDeploy: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              actions: ['sts:AssumeRole'],
              // Grants access to all CDK bootstrap roles in this account
              resources: [`arn:aws:iam::${AWS_ACCOUNT}:role/cdk-*`],
            }),
          ],
        }),
      },
    });

    new cdk.CfnOutput(this, 'DeployRoleArn', {
      value: role.roleArn,
      description: 'Set as AWS_ROLE_ARN secret in GitHub repo settings',
    });
  }
}
