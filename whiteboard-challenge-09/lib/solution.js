'use strict'

const SLL = require('../lib/sll')

exports.findOffset = function(sll, offsett) {

  //either argument missing return null
  if(!sll || !offsett) return null
  let nodeCount = 0
  for(let itr = sll.head; itr.next; itr = itr.next) nodeCount++
  //offset greater than link list length return null
  if(nodeCount - offsett < 0) return null
  nodeCount -= offsett
  for(var itr2 = sll.head; nodeCount > 0; itr2 = itr2.next) nodeCount--
  let newsll = new SLL()
  newsll.insertHead(itr2.value)
  return newsll
}
