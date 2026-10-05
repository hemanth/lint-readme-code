"use strict";
var readFile = require("fs").readFile;
var codeBlocks = ((m) => (m && m.default) ? m.default : m)(require("gfm-code-blocks"));
var xo = require("xo");
var linters = {
  js: (code) => xo.lintText(code, { filename: "readme.js" })
};
module.exports = function (filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, {encoding: "utf8"}, (err, data) => {
      if (err) return reject(err);
      var blocks = codeBlocks(data).filter(v => (v.lang || v.type) && linters[v.lang || v.type]);
      if (!blocks.length) return resolve({ errorCount: 0, results: [{ errorCount: 0 }] });
      var b = blocks[0];
      Promise.resolve(linters[b.lang || b.type](b.code)).then(resolve, reject);
    });
  });
};
