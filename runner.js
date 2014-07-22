#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure({name: 'footballbot workshop', fg: 'black', bg: 'green'})

var problems = [
  'Power On Self Test',
  'Bluefoot Toothball',
  'Construction Yard',
  'Kick Off'
]

problems.forEach(function (p) {
  shop.add(p, function () { return require('./problems/' + p.toLowerCase().replace(/ /g, '-')) })
})

shop.execute(process.argv.slice(2))