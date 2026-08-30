export const DOMAIN = 'anthonydandrea.dev';
export const AWS_ACCOUNT = '791677118766';
export const AWS_REGION = 'us-east-1';
export const AMPLIFY_REGION = 'us-east-2';
export const GITHUB_REPO = 'anthonydandrea/anthonydandrea.dev';

// CloudFront hosted zone ID — constant for all CF distributions
export const CF_HOSTED_ZONE_ID = 'Z2FDTNDATAQYW2';

export interface Site {
  subdomain: string | null; // null = apex (also creates www CNAME)
  cloudfrontDomain: string;
}

// ACM cert validation record shared across Amplify-managed domains
export const ACM_VALIDATION = {
  name: '_12cbf0fd0e2905e62a12409c136b608c',
  value: '_df9535e27c5d905106958f3d42e1a43f.qxcwttcyyb.acm-validations.aws',
};

// Add new subdomains here.
// For Amplify sites: get cloudfrontDomain from:
//   aws amplify get-domain-association --app-id <id> --domain-name anthonydandrea.dev --region us-east-2
// For CloudFront sites: use the distribution domain directly.
export const sites: Site[] = [
  { subdomain: null,            cloudfrontDomain: 'd25wov7f97oxdx.cloudfront.net' },  // anthonydandrea.dev (Amplify)
  { subdomain: 'cadets-shorts', cloudfrontDomain: 'd2u602v8d23jxc.cloudfront.net' },  // Amplify
  { subdomain: 'patricialiu',   cloudfrontDomain: 'd2nawenuj1ueit.cloudfront.net' },   // CloudFront/S3
  { subdomain: 'drive',         cloudfrontDomain: 'd3u2zn8scvo94n.cloudfront.net' },   // CloudFront
];
