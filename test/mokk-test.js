var assert = require('assert')

var mokk = require('../index.js')

mokk.start('hello', function () {
  return 'hello'
})

mokk.start('bye', function () {
  return 'bye'
})

var result = require('hello')
assert.equal(result, 'hello')

result = require('bye')
assert.equal(result, 'bye')

mokk.stop('bye')

try {
  result = require('bye')
} catch (e) {
  assert.ok(e.message.includes('Cannot find module'))
}

mokk.stop()

try {
  result = require('hello')
} catch (e) {
  assert.ok(e.message.includes('Cannot find module'))
}
