# lint-readme-code [![Build Status](https://travis-ci.org/hemanth/lint-readme-code.svg?branch=master)](https://travis-ci.org/hemanth/lint-readme-code)

> lint code in your readme.md

The idea is to extract the code blocks from your `readme.md` file and run the required lint and report the errors on it!

## Install

```
$ npm install --save lint-readme-code
```


## Usage

```js
const lintReadmeCode = require('lint-readme-code');

lintReadmeCode()
.then(report => console.log('lint report'))
.catch(err => console.error(err))
```

## API

### lintReadmeCode([readmePath])

#### readmePath

Type: `string`
Default: `./readme.md`

Path to your `readme.md`

## CLI

```
$ npm install --global lint-readme-code
```

```
$ lrc --help

  Usage
    lrc [input]
```

## Example

```
$ lrc readme.md
"report" is defined but never used at line #4 for .then(report => console.log('lint report'))
Newline required at end of file but not found. at line #5 for .catch(err => console.error(err))
Missing semicolon. at line #5 for .catch(err => console.error(err))
```

## TODO

* Support more langs as of now it supports only JavaScript.

* Better CLI ouput? [maybe bit of colors?]

## License

MIT © [Hemanth.HM](http://h3manth.com)
