var fs = require('fs')
var path = require('path')
var msee = require('msee')

exports.problem = msee.parseFile(path.join(__dirname, 'problem.md'))
exports.solution = msee.parse('Reference solution:\n```js\n' + fs.readFileSync(path.join(__dirname, 'solution.js')) + '\n```')