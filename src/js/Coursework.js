'use strict';

const json = require('./default'),
  treeify = require('treeify');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  push(value) {
    let tree = this.root;
    if (!tree) {
      this.root = new Node(value);
      return;
    }
    function recurse(tree) {
      if (value < tree.value) {
        if (!tree.left) {
          tree.left = new Node(value);
          return;
        } else recurse(tree.left);
      } else if (!tree.right) {
        tree.right = new Node(value);
        return;
      } else recurse(tree.right);
    }

    recurse(tree);
  }

  doBalanced() {
    function maxDepth(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    let subtreeDifference = root => maxDepth(root.left) - maxDepth(root.right);

    function recursion(root, height) {
      let newRoot, node, r, difference;
      if (root !== null) {
        root.left = recursion(root.left, height + 1);
        root.right = recursion(root.right, height + 1);
        if (Math.abs((difference = subtreeDifference(root))) >= 2) {
          if (difference > 0) {
            newRoot = root.left;
            root.left = root.left.right ? root.left.right : null;
            newRoot.right = root;
          } else {
            newRoot = root.right;
            root.right = root.right.left ? root.right.left : null;
            newRoot.left = root;
          }
          root = newRoot;

          if (Math.abs((difference = subtreeDifference(root))) >= 2) {
            difference > 0
              ? (root.left = recursion(root.left, height))
              : (root.right = recursion(root.right, height));

            if (!height)
              if (Math.abs(difference = subtreeDifference(root) >= 2))
              if (difference > 0) {
                newRoot = root.left;
                root.left = root.left.right;
                newRoot.right = root;
              } else {
                newRoot = root.right;
                root.right = root.right.left;
                newRoot.left = root;
              }
              root = newRoot;
              return root;
            }
        }
      }
      return root;
    }
    return recursion(this.root, 0);
  }
}

let keys = {};
for (let obj of json) {
  for (let key in obj) {
    if (!keys.hasOwnProperty(key)) {
      keys[key] = new BinarySearchTree();
    }
    let tree = keys[key];
    tree.push(obj[key]);
  }
}

for (let [key, value] of Object.entries(keys)) {
  keys[key] = value.doBalanced();
  console.log(treeify.asTree(keys[key], true));
}
