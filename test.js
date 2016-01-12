import test from 'ava';
import fn from './';

test('must lint the readme', t => {
	fn('./readme.md').then(res => {
		t.is(res.results[0].errorCount, 3);
		t.end();
	});
});
