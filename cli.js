#!/usr/bin/env node
'use strict';
var meow = ((m) => (m && m.default) ? m.default : m)(require('meow'));
var lintReadmeCode = require('./');

var cli = meow([
	'Usage',
	'  $ lrc [readmePath]'
]);

var file = cli.input[0] || './readme.md';

lintReadmeCode(file).then(report => {
	report.results.filter(res => res.errorCount > 0)
	.forEach(v => v.messages.forEach(v => console.log(`${v.message} at line #${v.line} for ${v.source}`)));
}).catch(err => console.error(err));
