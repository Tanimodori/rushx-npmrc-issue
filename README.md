# rushx-npmrc-issue

This repo is a minimal reproduction of an issue with `rushx` and `.npmrc` files. No `.npmrc` file is concerned by the `rushx` command.

## Reproduce

To test the issue, run the following commands:

```bash
rush update
cd packages/example-package
rushx test
```

It will show the following message:

```bash
rushx test
Found configuration in C:\path\to\project\rushx-npmrc-issue\rush.json

Rush Multi-Project Build Tool 5.90.0 - Node.js 16.19.0 (LTS)
> "node index.js"

Total npm_* env vars: 0
```

Which means no env var in `.npmrc` file is taken into account.

`pnpm test` however, can detect local `.npmrc` file alongside with `~/.npmrc`

```bash
pnpm test

> example-package@0.0.1 test C:\path\to\rushx-npmrc-issue\packages\example-package
> node index.js

npm_command test
(...omitted...)
npm_config_LOCAL_NPMRC_VAR local_npmrc_var
(...omitted...)
Total npm_* env vars: 25
```

The use of `process.env['npm_cofig_foo']` is widely used in npm packages and need to be configured in some case, for example, to use a private binary mirror or specify C++ compiler version.
