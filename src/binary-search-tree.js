const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor()
  {
    this.rootNode = null;
  }

  root() {
    return (!this.rootNode) ? null : this.rootNode
  }

  add(data) {
    const newNode = new TreeNode(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(parent, newNode) {
    if (newNode.data < parent.data) {
      if (parent.left === null) {
        parent.left = newNode;
      } else {
        this.insertNode(parent.left, newNode);
      }
    } else {
      if (parent.right === null) {
        parent.right = newNode;
      } else {
        this.insertNode(parent.right, newNode);
      }
    }
  }

  has(data) {
    return this.findNode(this.rootNode, data, 'has');
  }

  find(data) {
    return this.findNode(this.rootNode, data, 'find');
  }

  findNode(node, value, type) {
    // let type = type;
    if (node === null) {
      return (type === 'find') ? null : false
    }
    if (value === node.data) {
      return (type === 'find') ? node : true
    }
    if (value < node.data) {
      return this.findNode(node.left, value, type);
    }
    return this.findNode(node.right, value, type);
  }

  remove(data) {
    this.root = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let temp = this.findMin(node.right);
        node.data = temp.data;
        node.right = this.removeNode(node.right, temp.data);
      }
    }

    return node;
  }
  findMin(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    let startNode = this.rootNode
    if(!startNode) return null;
    let minValue = startNode.data;
    while(startNode.left){
      minValue = startNode.left.data
      startNode = startNode.left
    }
    return minValue
  }

  max() {
    let startNode = this.rootNode
    if(!startNode) return null;
    let maxValue = startNode.data;
    while(startNode.right){
      maxValue = startNode.right.data
      startNode = startNode.right
    }
    return maxValue
  }
}

module.exports = {
  BinarySearchTree
};