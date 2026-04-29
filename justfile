# Print available commands
default:
    @just --list

# Define the Hugo build command
build:
    hugo --gc --minify

build-dev:
    hugo -D

serve:
    #!/usr/bin/env bash
    trap 'kill $(jobs -p) 2>/dev/null' EXIT
    (last=""; while true; do
        current=$(md5 -q resume.tex)
        if [ "$current" != "$last" ] && [ -n "$last" ]; then
            echo "resume.tex changed, rebuilding..."
            /Library/TeX/texbin/pdflatex -interaction=nonstopmode resume.tex > /dev/null 2>&1 \
                && cp resume.pdf static/cv/AnthonyDAndreaResume.pdf \
                && echo "Resume rebuilt." \
                || echo "ERROR: resume compile failed"
        fi
        last=$current; sleep 1
    done) &
    hugo server -D -p 61000

insert-redirect-links:
    ./bin/insert-redirect-links

# Build resume PDF from LaTeX source
build-resume:
    pdflatex -interaction=nonstopmode resume.tex
    cp resume.pdf static/cv/AnthonyDAndreaResume.pdf

# Combine build and copy tasks
deploy: build insert-redirect-links
deploy-dev: build-dev insert-redirect-links
