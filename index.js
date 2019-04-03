/* eslint-disable */
var postcss = require('postcss')

module.exports = postcss.plugin('postcss-plugin-image-to-url', function (opts) {
  opts = Object.assign({}, {
    disable: false
  }, opts || {})
  // Work with options here

  return function (root, result) {
    // Transform CSS AST here
    if (!opts.disable && opts.localBaseDir && opts.remoteBaseLink) {
      root.walkRules(function(rule) {
        rule.walkDecls(/^background.*/, function(decl) {
          var reg =new RegExp(`(.*url[(]{1}['"]?).*${opts.localBaseDir}(.+['"]?[)]{1}.*)`)
          rule.replaceValues(reg, function($0, $1, $2) {
            return !/.*url\(['"]?https?:\/\/.*/.test($0) 
              ? `${$1}${opts.remoteBaseLink}${$2}`
              : $0
          })
        })
      })

    }
  }
})
