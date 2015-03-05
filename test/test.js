var test = require('tape')
var fs = require('fs')
var ncp = require('ncp')
var addExtension = require('../')

test('add to file that does not', function(t) {
	ncp('test/no-extension', 'test/tmp', function(err) {
		t.notOk(err, 'no err')
		addExtension('test/tmp/lol', 'ext', function(err) {
			t.ok(fs.existsSync('test/tmp/lol.ext'))
			fs.unlinkSync('test/tmp/lol.ext')
			fs.rmdirSync('test/tmp')
			t.end()
		})
	})
})

test('do not add to file that has', function(t) {
	ncp('test/has-extension', 'test/tmp', function(err) {
		t.notOk(err, 'no err')
		addExtension('test/tmp/butts.lol', 'ext', function(err) {
			t.ok(fs.existsSync('test/tmp/butts.lol'))
			fs.unlinkSync('test/tmp/butts.lol')
			fs.rmdirSync('test/tmp')
			t.end()
		})
	})
})

test('add to directory', function(t) {
	ncp('test/both', 'test/tmp', function(err) {
		t.notOk(err, 'no err')
		addExtension('test/tmp', 'ext', function(err) {
			t.ok(fs.existsSync('test/tmp/butts.lol'), 'not renamed')
			t.ok(fs.existsSync('test/tmp/lol.ext'), 'renamed')
			fs.unlinkSync('test/tmp/butts.lol')
			fs.unlinkSync('test/tmp/lol.ext')
			fs.rmdirSync('test/tmp')
			t.end()
		})
	})
})
