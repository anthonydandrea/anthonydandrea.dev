# Print available commands
default:
    @just --list

# Define the Hugo build command
build:
    hugo --gc --minify

build-dev:
    hugo -D

serve:
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
