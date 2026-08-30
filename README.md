# anthonydandrea.dev

Personal site built with Hugo, deployed on AWS Amplify (us-east-2).

## Stack

- **Static site generator:** Hugo (extended)
- **Hosting:** AWS Amplify, us-east-2
- **Build:** `amplify.yml` — installs Dart Sass, Go, Hugo, then runs `just deploy`
- **Resume:** LaTeX source (`resume.tex`), compiled to PDF via `pdflatex`
- **DNS:** Route 53 hosted zone (us-east-1), managed via CDK in `infra/`
- **Registrar:** Squarespace (pending transfer to Route 53)

## Local Development

```sh
just serve         # Hugo dev server on :61000, auto-recompiles resume.tex on change
just build         # Production build → public/
just build-resume  # Compile resume.tex → static/cv/AnthonyDAndreaResume.pdf
```

## Infra

CDK app in `infra/`. Manages Route 53 hosted zone and DNS records for all subdomains.
GitHub Actions deploys infra automatically on push to `main` when `infra/` changes.

### Adding a subdomain

Edit `infra/sites.ts` — one line per site:

```ts
{ subdomain: 'foo', cloudfrontDomain: 'xxxxx.cloudfront.net' }
```

For new Amplify sites, get the CloudFront domain after setting up the custom domain in Amplify console:

```sh
aws amplify get-domain-association --app-id <id> --domain-name anthonydandrea.dev --region us-east-2
```

### First-time setup

```sh
cd infra && npm install
npx cdk bootstrap aws://791677118766/us-east-1
npx cdk deploy --all  # run once manually with admin creds to create the GitHub OIDC role
```

After first deploy, grab `DeployRoleArn` from OidcStack outputs and set as `AWS_ROLE_ARN` secret in GitHub repo settings.

### Domain migration status

Nameservers switched from Squarespace to Route 53 on 2026-08-30. Sites and SSL are live.

To complete ownership transfer to Route 53 (when ready):
1. Squarespace → Domains → unlock domain → get auth/EPP code
2. AWS console → Route 53 → Registered Domains → Transfer In
3. Takes 5-7 days, costs ~$12 (renews for one year)
