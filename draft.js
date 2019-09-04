'use strict';

function Root(val) {
  this.root = val;
  this.right = null;
  this.left = null;
}

let tree = this.root;
tree = new Root(8);
tree.right = new Root(90);
console.log(tree);

function recurseRoot(root) {
  root.right = 0;
  // console.log(root);
};

recurseRoot(tree);

console.log(tree);
