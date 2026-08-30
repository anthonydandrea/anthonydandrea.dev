# anthonydandrea.dev

Personal site built with Hugo, deployed on AWS Amplify (us-east-2).

## Stack

- **Static site generator:** Hugo (extended)
- **Hosting:** AWS Amplify, us-east-2
- **Build:** `amplify.yml` — installs Dart Sass, Go, Hugo, then runs `just deploy`
- **Resume:** LaTeX source (`resume.tex`), compiled to PDF via `pdflatex`

## Local Development

```sh
just serve       # Hugo dev server on :61000, auto-recompiles resume.tex on change
just build       # Production build → public/
just build-resume  # Compile resume.tex → static/cv/AnthonyDAndreaResume.pdf
```
