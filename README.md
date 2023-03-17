### TDD Workshop

This repo would be used to show examples in our TDD workshop

This setup allows you to use either javsacript or typescript files to run tests in nodeJS using [mocha](https://www.npmjs.com/package/mocha) and [chai](https://www.npmjs.com/package/chai)

### Running the tests

To run the tests for this project, simply run

```sh
npm run test
```

This runs both your typescript and JS test files.

Note that all test files must match the pattern `*.test.ts` or `*.test.js`.

### All JS code is in ES5

This setup does not configure the JS files to use es6 `import`. Thus we must use `require` to import our modules in all JS files.
