'use strict';

const studentsData = require('../tests/dataSet');

class ListForNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class List {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value) {
    let node = new ListForNode(value);
    let currentNode = this.head;
    if (this.length === 0) {
      this.head = node;
    } else {
      let index = this.length;
      while (index !== 1) {
        currentNode = currentNode.next;
        index--;
      }
      currentNode.next = node;
    }
    this.length++;
    return node;
  }

  printList() {
    let currentNode = this.head;
    let quantity = this.length;
    while (index !== 1) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
      quantity--;
    }
    return currentNode.data;
  }
}

const list16 = new List();
const list17 = new List();
const list18 = new List();
const list19 = new List();
const list20 = new List();

class Node {
  constructor(value, index) {
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

    function maxRightSubtree(prevRoot, q) {
      if (prevRoot && !prevRoot.right) {
        prevRoot = prevRoot.left;
        console.log("prevRoot.value");
        console.log(prevRoot);
        // return q;
      } else {
        maxRightSubtree(prevRoot.right);
      }
    }

    function minLeftSubtree(prevRoot) {
      if (prevRoot && !prevRoot.left) {
        prevRoot = prevRoot.right;
        // return prevRoot;
      } else {
        maxRightSubtree(prevRoot.left);
      }
      // if (root && !root.left) {
      //   this.root = root;
      //   root = root.right;
      // } else {
      //   minLeftSubtree(root.left);
      // }
    }

    let subtreeDifference = root =>
      maxDepth(root.left) - maxDepth(root.right);

    let difference, count = 0;
    function maximum(tree) {
     if (!tree || !tree.right) return tree;
     return maximum(tree.right);
     //  recurseRight(root.right);
   }
    // let balancingTree = root => {
    //   // if (!root.right || !root.left) {
    //   //   if (root.right && root.left) return root;
    //   //   if (!root.right && !root.left) return;
    //   //   this.rotation();
    //   // } else {
    //     if (Math.abs((difference = subtreeDifference(root))) >= 2) {
    //       // console.log(`***${root.value}`);
    //       console.log(root);
    //       if (difference > 0) {
    //         let max = maximum(root.left);
    //         root.left = maxRightSubtree(root.left, this.root);
    //         // console.log(`difference = ${difference}, root = ${root.left.value}`);
    //         // this.root = max;
    //         max.left = root.left;
    //         root.left = null;
    //         max.right = root;
    //         // console.log(`this root = ${root.value}`);
    //         // root.index = 1;
    //         root = max;
    //         root.value = max.value;
    //         root.left = max.left;
    //         root.right = max.right;
    //         console.log(`typeof ${typeof max}`);
    //         // console.log(root);
    //         // return root;
    //       } else {
    //         minLeftSubtree(root.right);
    //         // console.log(root);
    //         this.root.right = root.right;
    //         root.right = null;
    //         this.root.left = root;
    //         // root.index = -1;
    //       }
    //       // this.root.index = 0;
    //     }
    //     return root;
    //   // }
    // };

    function recursion(root) {
      // console.log('hello');
      // console.log(tree);
      if (root !== null && root !== undefined) {
        // if (tree.left) tree.index = -1;
        root.left = recursion(root.left);
        // if (tree.right) tree.index = 1;
        console.log(`tree `)
        // if (!count && !(count % 2))
        root.right = recursion(root.right);
        // console.log(tree);
        // let a = tree;
        // let a = root.value;
        // console.log(a);
        // if (a === 60) {
          // a = balancingTree(tree);
          // tree = a;
          // tree.value = a.value;
          // tree.left = a.left;
          // tree.right = a.right;
          if (Math.abs((difference = subtreeDifference(root))) >= 2) {
            // console.log(`***${root.value}`);
            // console.log(root);
            if (difference > 0) {
              let max = maximum(root.left);
              console.log(root.left);
              maxRightSubtree(root.left);
              console.log('root.left');
              console.log(root);
              console.log(max);
              // console.log(`difference = ${difference}, root = ${root.left.value}`);
              // this.root = max;
              max.left = root.left;

              root.left = null;
              max.right = root;
              // console.log(`this root = ${root.value}`);
              // root.index = 1;
              // root = max;
              root = max;
              console.log('root.left2');
              console.log(max);
              console.log(root);
              // root.right = 0;
              // root.right = root;
              // root.left = 0;
              // root.value = max.value;
              // root.left = max.left;
              // root.right = max.right;
              // root.right = new Node(100);
              // root.left = new Node(2);
              // root.value = 10;
              // return root;
              console.log('dwkoko');
              console.log(root.right);
              // console.log(root)
            } else {
              let min = minimum(root.right);
              minLeftSubtree(root.right);
              // console.log(root);
              min.right = root.right;
              root.right = null;
              min.left = root;
              root = min;
            }

            // return root;
            // console.log('difference');
            //
            // console.log(difference);
          }
          console.log(root);

        // }
        console.log('end');
        console.log(root);

        // console.log(tree);
        // count++;
      }
      console.log(root);
      return root;
    }

    root = recursion(root);
    console.log('root');
    console.log(root);

  }

  ///////        delete contains             ////////////

  contains(value) {
    let doesContain = false;
    let node = this.root;
    function recursive(node, value) {
      if (node === null) doesContain = false;
      else if (value < node.value) return recursive(node.left, value);
      else if (value > node.value) return recursive(node.right, value);
      else doesContain = true;
    }

    Treerecursive(node, value);

    return doesContain;
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

[50, 48, 49, 60, 59, 58].forEach(value => {
  bstTime.push(value);
});

// [50, 48, 47, 46, 60, 59, 58].forEach(value => {
//   bstTime.push(value);
// });
// [50, 48, 49].forEach(value => {
//   bstTime.push(value);
// });



console.log('\nWork with Names\n');
console.log(bstTime.root);

console.log(bstTime.doBalanced());
console.dir(`bstTime`);
console.log(bstTime.right);

// const bstAge = new BinarySearchTree();
//
// studentsData.forEach((value, set) => {
//   const temp = !bstAge.contains(value.age);
//   if (temp) {
//     // console.log(value.age);
//
//     bstAge.push(value.age);
//     bstAge.doBalanced();
//   }
//
//   switch (value.age) {
//     case 16:
//       list16.add(value.name);
//       break;
//     case 17:
//       list17.add(value.name);
//       break;
//     case 18:
//       list18.add(value.name);
//       break;
//     case 19:
//       list19.add(value.name);
//       break;
//     case 20:
//       list20.add(value.name);
//       break;
//   }
// });
//
// const listIp71 = new List();
// const listIp72 = new List();
// const listIp73 = new List();
// const listIp74 = new List();
// const bstGroup = new BinarySearchTree();
//
// studentsData.forEach((value, set) => {
//   if (!bstGroup.contains(value.group)) {
//     bstGroup.push(value.group);
//   }
//
//   switch (value.group) {
//     case 'IP-71':
//       listIp71.add(value.name);
//       break;
//     case 'IP-72':
//       listIp72.add(value.name);
//       break;
//     case 'IP-73':
//       listIp73.add(value.name);
//       break;
//     case 'IP-74':
//       listIp74.add(value.name);
//       break;
//   }
// });
