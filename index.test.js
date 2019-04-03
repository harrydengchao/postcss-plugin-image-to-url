/* eslint-disable */
var postcss = require('postcss')
var path = require('path')
var fs = require('fs')

var plugin = require('./')

function resolve(dir) {
  return path.resolve(__dirname, '.', dir)
}

function run (input, output, opts) {
  fs.readFile(input, (err, css) => {
    postcss([plugin(opts)])
      .process(css, { from: input, to: output })
      .then(result => {
        fs.writeFile(output, result.css, () => true)
        if (result.map) {
          fs.writeFile(`${output}.map`, result.map, () => true)
        }
      })
      .catch(error => {
        console.error(error.message)
      })
  })
}

run(resolve('test/index.css'), resolve('test/out.css'), {
  disable: false, // 禁用
  localBaseDir: '/images/',
  remoteBaseLink: 'http://a.b.c/images/'
})

