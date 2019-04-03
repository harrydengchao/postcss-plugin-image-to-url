# PostCSS Plugin Image To Url [![Build Status][ci-img]][ci]

[PostCSS] plugin image-to-url.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/harrydengchao/postcss-plugin-image-to-url.svg
[ci]:      https://travis-ci.org/harrydengchao/postcss-plugin-image-to-url

```css
.foo {
    /* Input example */
  background-image: url(http://a.com/images/logo.gif);
  color: #f00;
  background: url("./assets/images/logo.jpg") no-repeat;
}
```

```css
.foo {
  /* Output example */
  background-image: url(http://a.com/images/logo.gif);
  color: #f00;
  background: url("http://a.b.c/images/logo.jpg") no-repeat;
}
```

## Usage

```js
postcss([ require('postcss-plugin-image-to-url')({
  disable: false, // disabled
  localBaseDir: '/images/',
  remoteBaseLink: 'http://a.b.c/images/'
}) ])
```

## Options

| prop | value | default | require |
| ---  | ---   | -----   | --- |
| `disable` | `true` / `false` | `false` | `false` | 
| `localBaseDir` | `local image path` | | `true` |
| `remoteBaseLink` | `remote link base` | | `true` |

See [PostCSS] docs for examples for your environment.
