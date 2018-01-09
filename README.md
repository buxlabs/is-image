# is-image

> Check if a filepath is an image

The package is very similar to [image-type](https://github.com/sindresorhus/image-type) but it does not depend on built in `path` and does not use `const` or `Set`. It makes it simpler to use it in older browsers without a transpilation step.

## Install

```
$ npm install @buxlabs/is-image
```


## Usage

```js
var isImage = require('@buxlabs/is-image');

isImage('src/foo.png'); // true
isImage('src/foo.txt'); // false
```


## Related

- [image-type](https://github.com/sindresorhus/image-type) - Detect the image type of a Buffer/Uint8Array
- [image-extensions](https://github.com/arthurvr/image-extensions) - List of image extensions
- [is-text-path](https://github.com/sindresorhus/is-text-path) - Check if a filepath is a text file
- [is-binary-path](https://github.com/sindresorhus/is-binary-path) - Check if a filepath is a binary file


## License

MIT
