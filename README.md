# Mokk

Require mocker used (mostly) for testing.

### Install

```
npm i mokk
```

### Usage

```js
var mokk = require('mokk')

// Start mocking 'waveorb'
mokk.start('waveorb', function() {
  var companies = [{ name: 'Firmalisten' }]
  return companies
})

// Stop mocking 'waveorb'
mokk.stop('waveorb')

// Stop all mocking
mokk.stop()
```

MIT Licensed. Enjoy!

Created by [Eldøy Projects](https://eldoy.com)
