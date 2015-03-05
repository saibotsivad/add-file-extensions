var Promise = require('promise')
var fs = require('fs')
var path = require('path')

function addExtensionToFiles(files, extension, cb) {
	Promise.all(files.map(function renameFiles(file) {
		return new Promise(function(resolve, reject) {
			if (path.extname(file).length === 0 && file.indexOf('.') !== 0) {
				fs.rename(file, file + '.' + extension, resolve)
			} else {
				resolve()
			}
		})
	})).then(function() {
		cb()
	})
}

module.exports = function(fileOrFolder, extension, cb) {
	fs.stat(fileOrFolder, function(err, stats) {
		if (!err) {
			if (stats.isDirectory()) {
				fs.readdir(fileOrFolder, function(err, files) {
					if (err) {
						cb(err)
					} else {
						var filesWithFolders = files.map(function(file) {
							return path.join(fileOrFolder, file)
						})
						addExtensionToFiles(filesWithFolders, extension, cb)
					}
				})
			} else {
				addExtensionToFiles([ fileOrFolder ], extension, cb)
			}
		}
	})
}
