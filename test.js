var assert = require('assert')
var isImage = require('.')

assert(isImage('foo.jpg'));
assert(isImage('foo.JPG'));
assert(!isImage('foo.zip'));
assert(!isImage('foozip'));
assert(!isImage('foo.txt'));
assert(!isImage('jpg'));
