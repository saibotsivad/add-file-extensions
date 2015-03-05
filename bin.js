#!/usr/bin/env node

var addExtensions = require('add-file-extensions')

var arg = process.argv[2]

addExtensions(process.argv[2], process.argv[3], function() {
	console.log('complete')
})
