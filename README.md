# add-file-extensions

[![Greenkeeper badge](https://badges.greenkeeper.io/saibotsivad/add-file-extensions.svg)](https://greenkeeper.io/)

Add some file extensions to a bunch of files.

## use

```js
var addExtension = require('add-file-extensions')

addExtensions('/path/to/folder', 'doc', function(err) {
	if (!err) {
		// all files in folder have `doc` extension added
	}
})
```

## license

[VOL](http://veryopenlicense.com)
