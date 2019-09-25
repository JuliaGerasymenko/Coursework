'use strict';

const studentsData = require('../tests/dataSet');

class Node {
  constructor(value, index) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.index = index;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  push(value) {
    let tree = this.root;
    if (!tree) {
      this.root = new Node(value, 0);
      return;
    }
    function recurse(tree) {
      if (value < tree.value) {
        if (!tree.left) {
          tree.left = new Node(value, -1);
          return;
        } else recurse(tree.left);
      } else if (!tree.right) {
        tree.right = new Node(value, 1);
        return;
      } else recurse(tree.right);
    }

    recurse(tree); //recurse(this);
  }

  //////////////rewrite rotation/////////
  rotation() {
    let root = this.root;
    //
    let leftIndex = 0,
      rightIndex = 0;

    function recurseLeft(tree) {
      if (tree !== null) {
        recurseLeft(tree.left);
        leftIndex--;
        recurseLeft(tree.right);
      }
    }
    function recurseRight(tree, rightIndex) {
      if (tree !== null) {
        recurseRight(tree.left);
        rightIndex++;
        recurseRight(tree.right);
      }
    }
    recurseLeft(root.left);
    recurseRight(root.right);

    let difference = leftIndex + rightIndex;

    if (difference === -2) {
      this.root = root.left;
      root.left = null;
      this.root.right = root;
    } else if (difference === 2) {
      this.root = root.right;
      root.right = null;
      this.root.left = root;
    }
  // left: Node { value: 47, left: null, right: null },
  // right: null }

    return this.root;
    function minRightSubtree(root) {
      if (root && !root.right) {
        root = max.left;
      } else {
        minRightSubtree(root.right);
      }
    }

    function maxLeftSubtree(root) {
      if (root && !root.left) {
        root = min.right;
      } else {
        maxLeftSubtree(root.left);
      }
    }
    // let difference;
    if (difference < 0) {
      this.root = max;

      minRightSubtree(root.left);

      this.root.left = root.left;
      root.left = null;
      this.root.right = root;
    } else {
      this.root = min;

      maxLeftSubtree(root.right);

      this.root.right = root.right;
      root.right = null;
      this.root.left = root;
    }
  }

  doBalanced() {
    let root = this.root;

    function maxDepth(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    function newMaxRight(prevRoot) {

    }

    function minLeftSubtree(root) {
      if (root && !root.left) {
        this.root = root;
        root = root.right;
      } else {
        minLeftSubtree(root.left);
      }
    }

    let subtreeDifference = root =>
      maxDepth(root.left) - maxDepth(root.right);

    let difference, count = 0;
    function maximum(tree) {
     if (!tree || !tree.right) return tree;
     return maximum(tree.right);
     //  recurseRight(root.right);
   }
  //  function minimum(tree) {
  //   if (!tree || !tree.left) return tree;
  //   return maximum(tree.left);
  // }
    // function minimum(tree) {
    //

    function maxRightSubtree(prevRoot) {
      if (prevRoot && !prevRoot.right) {
        console.log(`${prevRoot.value}************`);
        prevRoot = prevRoot.left;
        // return prevRoot;
        return 'hello';
      } else {
        return maxRightSubtree(prevRoot.right);
      }
    }
    // }
// max - maximum node value in the left subtree
// min - minimum node value in the right subtree
// rlNode - the right -> left node in the tree
// lrNode - the left -> right node in the tree
    function recursion(root) {
      if (root !== null) {
        root.left = recursion(root.left);
        root.right = recursion(root.right);
          if (Math.abs((difference = subtreeDifference(root))) >= 2) {
            if (difference > 0) {
              let lrNode;
              let max = root.left;
              root.left = null;
              console.log('root.left');
              console.log(root.left);
              console.log(max);
              if (max.right) lrNode = max.right;
              max.right = root;
              if (lrNode) max.right.left = lrNode;
              root = max;
            } else {
              let rlNode;
              let min = root.right;
              root.right = null;
              if (min.left) rlNode = min.left;
              min.left = root;
              if (rlNode) min.left.right = rlNode;
              root = min;
            }
          }
//           console.log(ro8,
//   left: Node { value: 47, left: null, right: null },
//   right: null }
// ot);

        console.log('end');
        console.log(root);
      }
      return root;
    }

    root = recursion(root);
    console.log('root');
    console.log(root);
    return root;
  }
  doBalanced2() {
    let root = this.root;
    let lrNode, rlNode, max;

    function maxDepth(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }


    function minLeftSubtree(root) {
      if (root && !root.left) {
        this.root = root;
        root = root.right;
        // root = min.right;
      } else {
        minLeftSubtree(root.left);
      }
    }

    let subtreeDifference = root =>
      maxDepth(root.left) - maxDepth(root.right);

    let difference, count = 0;
    function maximum(tree) {
     if (!tree || !tree.right) return tree;
     return maximum(tree.right);
     //  recurseRight(root.right);
   }
  //  function minimum(tree) {
  //   if (!tree || !tree.left) return tree;value: 47, left: null, right: null, index: -1 }

  //   return maximum(tree.left);
  // }
    // function minimum(tree) {
    //
    // }

    function maxLeftSubtree(prevRoot) {
      if (prevRoot && prevRoot.right && !prevRoot.right.right) {
        lrNode = prevRoot.right;
        prevRoot.right = null;
        console.log(prevRoot);
        max = prevRoot;
        console.log(max);
        prevRoot = prevRoot.left;
        console.log(`${max}************`);
        console.log(prevRoot);
        return prevRoot;
      } else {
        return prevRoot.right = maxLeftSubtree(prevRoot.right);
        console.log(prevRoot);
      }
    }
// max - maximum node value in the left subtree
// min - minimum node value in the right subtree
// rlNode - the right -> left node in the tree
// lrNode - the left -> right node in the tree

    function recursion(root) {
      if (root !== null) {
        recursion(root.left);
        recursion(root.right);
          if (Math.abs((difference = subtreeDifference(root))) >= 2) {
            if (difference > 0) {
              console.log(maxLeftSubtree(root.left));
              max.left = root.left;
              root.left = null;
              max.right = root;
              if (lrNode) max.right.left = lrNode;
              // console.log(lrNode);
              root = max;
            } else {
              let rlNode;
              let min = root.right;
              root.right = null;
              if (min.left) rlNode = min.left;
              min.left = root;
              if (rlNode) min.left.right = rlNode;
              root = min;
            }
          }

        console.log('end');
        // console.log(root.left);
      }
      return root;
    }

    root = recursion(this.root);
    console.log('root');
    console.log(root.left);
    return root;
  }

  printTree() {
    function recursion(tree) {
      if (tree !== null) {
        recursion(tree.left);
        console.log(tree.value);
        recursion(tree.right);
      }
    }

    recursion(this.root);
  }
}


let bstName = new BinarySearchTree();

studentsData.forEach((value, set) => {
  bstName.push(value.name);
  bstName.rotation();
});

let bstTime = new BinarySearchTree();
// [50, 40, 42, 43, 41,30].forEach(value => {
//   bstTime.push(value);
// })
// [50, 48, 49, 60, 59, 58].forEach(value => {
//   bstTime.push(value);rotate
// });
[50, 48, 49].forEach(value => {
  bstTime.push(value);
});
// [50, 48,47, 46, 45].forEach(value => {
//   bstTime.push(value);
// });
// [50, 46, 48, 45, 47, 49].forEach(value => {
//   bstTime.push(value);
// });
// [50, 46, 48, 45, 47, 49].forEach(value => {
//   bstTime.push(value);
// });

console.log('\nWork with Names\n');
// console.log(bstTime);
// bstTime = bstTime.rotation();

bstTime = bstTime.doBalanced2();
console.dir(`bstTime`);
console.log(bstTime);
