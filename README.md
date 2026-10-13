# agent-sandbox

Demo project sandbox: a tiny Node.js greeter CLI. Requires Node 18+, no dependencies.

## Usage

```console
$ node greet.js Ada
Hello, Ada!
```

Only the first argument is used. With no name (or an empty one) it prints
`Usage: node greet.js <name>` to stderr and exits with code 1.

Run the tests:

```console
$ npm test
```
