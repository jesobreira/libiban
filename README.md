# libiban - IBAN code generator

IBAN code generator for NodeJS and browsers.

Based on [@ikraider/iban-generator](https://github.com/lkraider/iban-generator).

## How to install

```
npm i libiban
```

Or

```
yarn add libiban
```

```

## Usage

```javascript
import { gen, check } as iban from 'libiban'
```

For browsers:

```
<script src="./node_modules/libiban/dist/libiban.min.js"></script>
```

Or using CDN:

```
<script src="https://cdn.rawgit.com/jesobreira/libiban/master/dist/libiban.min.js"></script>

In browsers, you can include the script and it will populate the `window` object with `iban`.


Generating IBAN code:

```javascript
var generated_code = iban.gen({
	ispb: '60746948', // bank code
	agency: '1234',
	account: '567890',
	account_type: 'C',
	account_owner: 1
})

console.log(generated_code) // BR2860746948012340000567890C1
```

Testing IBAN code:

```javascript
iban.check('BR2860746948012340000567890C1') // true
```

## Running tests

We use Mocha for the unit tests.

```
npm test
```

## Bulding

To build libiban for browsers you will need Browserify and UglifyJS-ES6:

```
npm i -g browserify
npm i -g uglify-js-es6
```

The following command will create two files at "dist/" folder, "libiban.js" and "libiban.min.js".

```
npm run build
```