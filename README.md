# eduardbme/github-action-prettier

🔥 `prettier` CLI on Github Actions, allows you to run
every `prettier` CLI command on Github Actions without having to install Node.js
or any dependency in advance.

## Usage

```yml
# Check out the repository first.
- uses: actions/checkout@v2

- uses: eduardbme/eduardbme/github-action-prettier@1.0.0
  with:
    # prettier CLI arguments.
    args: . --check
```

# Version

## The tag version is bound to the `prettier` version.

For example, the tag `2.3.2` will use prettier with version `2.3.2`.