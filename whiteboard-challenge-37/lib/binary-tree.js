'use strict'

class BST {
  constructor(root=null) {
    this.root = root
  }

  insert(nodeToInsert) {
    if(this.root === null)
      this.root = nodeToInsert
    else
      this._insert(this.root,nodeToInsert)
  }

  _insert(root,nodeToInsert) {
    if(nodeToInsert.value < root.value) {
      if(!root.left)
        root.left = nodeToInsert
      else
        this._insert(root.left,nodeToInsert)
    } else {
      if(!root.right)
        root.right = nodeToInsert
      else
        this._insert(root.right,nodeToInsert)
    }
  }
}

module.exports = BST