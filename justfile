# Define the Hugo build command
build:
    hugo --gc --minify

build-dev:
    hugo -D

serve:
    hugo server -D -p 61000

# Define the task to copy redirects
copy-redirects:
    @find content/redirects -type f -name "index.html" | while read -r file; do \
        name=$(basename $(dirname "$file")); \
        mkdir -p "public/posts/$name"; \
        cp "$file" "public/posts/$name/index.html"; \
    done

# Combine build and copy tasks
deploy: build copy-redirects
deploy-dev: build-dev copy-redirects
