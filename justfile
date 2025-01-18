# Define the Hugo build command
build:
    hugo -d build

build-dev:
    hugo -D -d build

serve:
    hugo server -c build -D -p 61000

# Define the task to copy redirects
copy-redirects:
    @find content/redirects -type f -name "index.html" | while read -r file; do \
        name=$(basename $(dirname "$file")); \
        mkdir -p "build/posts/$name"; \
        cp "$file" "build/posts/$name/index.html"; \
    done

# Combine build and copy tasks
deploy: build copy-redirects
deploy-dev: build-dev copy-redirects
