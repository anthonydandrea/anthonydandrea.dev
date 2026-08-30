export const DOMAIN = 'anthonydandrea.dev';
export const AWS_ACCOUNT = '791677118766';
export const AWS_REGION = 'us-east-1';
export const AMPLIFY_REGION = 'us-east-2';
export const GITHUB_REPO = 'anthonydandrea/anthonydandrea.dev';

export interface AmplifySite {
  type: 'amplify';
  subdomain: string | null; // null = apex
  amplifyAppId: string;
  branch?: string;
}

export interface CloudFrontSite {
  type: 'cloudfront';
  subdomain: string;
  cloudfrontDomain: string;
}

export type SiteConfig = AmplifySite | CloudFrontSite;

// Add new subdomains here
export const sites: SiteConfig[] = [
  {
    type: 'amplify',
    subdomain: null,
    amplifyAppId: 'dhrrx8w7nybgm',
  },
  {
    type: 'amplify',
    subdomain: 'cadets-shorts',
    amplifyAppId: 'd3murdn76jeuny',
    branch: 'master',
  },
  {
    type: 'cloudfront',
    subdomain: 'patricialiu',
    cloudfrontDomain: 'd2nawenuj1ueit.cloudfront.net',
  },
  {
    type: 'cloudfront',
    subdomain: 'drive',
    cloudfrontDomain: 'd3u2zn8scvo94n.cloudfront.net',
  },
];
