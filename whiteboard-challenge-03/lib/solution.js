'use strict'

module.exports.traverse = traverse

const train = {
  "value": 2,
  "next": {
    "value": 8,
    "next": {
      "value": 16,
      "next": null
      }
  }
}

function traverse(train) {
  if (typeof train !== 'object') return null
  let total = 0
  while(train.next !== null) {
    console.log(train.value)
    if (typeof train.value !== 'number') return 'Value does not contain a number'
    total += train.value
    train = train.next
  }
  console.log(train.value)
  if (typeof train.value !== 'number') return 'Value does not contain a number'
  return total + train.value
}

