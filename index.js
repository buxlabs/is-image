var extensions = require('image-extensions')

function extname (string) {
  if (string.indexOf('.') === -1) return ''
  return string.split('.').pop()
}

module.exports = function isImage (string) {
  return extensions.indexOf(extname(string).toLowerCase()) !== -1
}
