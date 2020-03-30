# closure-webpack-plugin Template
Use Google-Closure-Library in webpack.

To run this app with NPM cli:
```sh
npm install
npm run build
```
Then use browser open the html files in directory `build`.

## example
- ./build/goog-require-example.html  
  Sample with traditional `goog.require`(without return) and `goog.provide`. If use `goog.provide` defines a top namespace `'Foo'`, this will create a global variable just like the `'goog'` after require. So, never use `goog.provide` defines too many top namespace.
- ./build/goog-module-example.html  
  Import the Closure module defined by `goog.module`.  
- ./build/goog-declare-example.html  
  Show how make cross reference between ES6 and Closure module.
