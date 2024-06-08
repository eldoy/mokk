var Module = require('module')
var _require = Module.prototype.require

var mocks = {}

Module.prototype.require = function () {
  var name = arguments[0]

  if (typeof mocks[name] == 'function') {
    return mocks[name]()
  }

  return _require.apply(this, arguments)
}

function start(name, callback) {
  mocks[name] = callback
}

function stop(name) {
  if (name) {
    delete mocks[name]
  } else {
    mocks = {}
  }
}

module.exports = { start, stop }
