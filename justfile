# Define the Hugo build command
build:
    hugo --gc --minify

build-dev:
    hugo -D

serve:
    hugo server -D -p 61000

insert-redirect-links:
    ./bin/insert-redirect-links

# Combine build and copy tasks
deploy: build insert-redirect-links
deploy-dev: build-dev insert-redirect-links
