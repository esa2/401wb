'use strict'

let solution = require('./lib/solution')

let obj = {head: {value: "1", next: {value: "2", next: {value: "3", next: {value: "4", next: {value: "5", next: null}}}}}}

solution.findIt(obj)
