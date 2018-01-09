var extensions = require('image-extensions')
var extname = require('utils-extname')

module.exports = function isImage (string) {
  return extensions.indexOf(extname(string).slice(1).toLowerCase()) !== -1
}
