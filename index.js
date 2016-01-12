'use strict';
var readFile = require('fs').readFile;
var codeBlocks = require('gfm-code-blocks');
var linters = {
	js: require('xo').lintText
};

module.exports = function (path) {
	var promise = new Promise((resolve, reject) => {
		readFile(path, {encoding: 'utf8'}, (err, data) => {
			if (err) {
				reject(err);
			} else {
				codeBlocks(data).filter(v => typeof v.lang !== 'undefined')
				.map(v => resolve(linters[v.lang](v.code)));
			}
		});
	});
	return promise;
};
