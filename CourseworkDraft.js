'use strict';

const set = new Set([
  {
    name: 'Brumar Vladislav',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Gerasymenko Julia',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Holub Anna',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Hriny Artem',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Humeinuk Inna',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Denysiuk Daniil',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Eivazova Tatiana',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Zorenko Victoria',
    group: 'IP-74',
    age: 17,
  },
  {
    name: 'Karkadim Sofia',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Kaspruk Nastia',
    birth: new Date('2001-01-17'),
    group: 'IP-74',
    age: 17,
  },
  {
    name: 'Korsyn Angelina',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Kobrii Stepan',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Maksai Anna',
    group: 'IP-74',
    age: 17,
  },
  {
    name: 'Mesheriakov Alexandriy',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Moroz Juriy',
    group: 'IP-74',
    age: 20,
  },
  {
    name: 'Mushenko Dmytro',
    group: 'IP-74',
    age: 19,
  },
  {
    name: 'Pereverziev Luka',
    group: 'IP-74',
    age: 19,
  },
  {
    name: 'Rabeshko Olexii',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Simonchuk Bogdan',
    group: 'IP-74',
    age: 19,
  },
  {
    name: 'Sivachenko Marina',
    group: 'IP-74',
    age: 19,
  },
  {
    name: 'Skrigun Vladislav',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Strachko Sergey ',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Tarakhtii Nikita',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Tikhonov Stanislav',
    group: 'IP-74',
    age: 17,
  },
  {
    name: 'Fomin Vladislav',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Khilichenko Egor',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Chirko Yaroslav',
    group: 'IP-74',
    age: 19,
  },
  {
    name: 'Yashuk Anton',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Yarema Anastasia',
    group: 'IP-74',
    age: 18,
  },
  {
    name: 'Yashenko Illia',
    group: 'IP-74',
    age: 18,
  },
]);

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
    const node = new ListForNode(value);
    let current = this.head;
    if (this.length === 0) {
      this.head = node;
    } else {
      let index = this.length;
      while (index !== 1) {
        current = current.next;
        index--;
      }
      current.next = node;
    }
    this.length++;
    return node;
  }

  printList() {
    let current = this.head;
    let index = this.length;
    while (index !== 1) {
      console.log(current.data);
      current = current.next;
      index--;
    }
    return current.data;
  }
}

const list16 = new List();
const list17 = new List();
const list18 = new List();
const list19 = new List();
const list20 = new List();

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    // this.index = index;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  push(value) {
    const tree = this.root;
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

    recurse(tree); //recurse(this);
  }
  ///////rewrite rotation///////
  rotation() {
    const root = this.root;

    let leftIndex = 0,
      rightIndex = 0;

    function recurseLeft(tree) {
      if (tree !== null) {
        recurseLeft(tree.left);
        leftIndex--;
        recurseLeft(tree.right);
      }
    }
    function recurseRight(tree) {
      if (tree !== null) {
        recurseRight(tree.left);
        rightIndex++;
        recurseRight(tree.right);
      }
    }
    recurseLeft(root.left);
    recurseRight(root.right);

    const difference = leftIndex + rightIndex;

    if (difference === -2) {
      this.root = root.left;
      root.left = null;
      this.root.right = root;
      root.index = 1;
    } else if (difference === 2) {
      this.root = root.right;
      root.right = null;
      this.root.left = root;
      root.index = -1;
    }

    this.root.index = 0;
    return this.root;
  }

  doBalanced() {
    const root = this.root;

    function maxDepth(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

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

    function recurseRight(tree) {
      if (tree !== null) {
        recurseRight(tree.left);
        recurseRight(tree.right);
        if (Math.abs((difference = subtreeDifference(tree))) >= 2) {
        }
      }
    }

    const subtreeDifference = root =>
      maxDepth(root.left) - maxDepth(root.right);

    if (!root.right || !root.left) {
      if (root.right && root.left) return root;
      this.rotation();
    } else {
      while (Math.abs((difference = subtreeDifference(root))) >= 2) {
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
    }
  }

  contains(value) {
    let doesContain = false;
    const node = this.root;
    function recursive(node, value) {
      if (node === null) doesContain = false;
      else if (value < node.value) return recursive(node.left, value);
      else if (value > node.value) return recursive(node.right, value);
      else doesContain = true;
    }

    recursive(node, value);

    return doesContain;
  }
}

console.log('\nWork with Names\n');
const bstName = new BinarySearchTree();
set.forEach((value, set) => {
  bstName.push(value.name);
  bstName.rotation();
});

console.log('\nWork with Ages\n');
const bstAge = new BinarySearchTree();

set.forEach((value, set) => {
  const temp = !bstAge.contains(value.age);
  if (temp) {
    console.log(value.age);

    bstAge.push(value.age);
    bstAge.doBalanced();
  }

  console.log('bstAge');
  console.log(bstAge);

  switch (value.age) {
    case 16:
      list16.add(value.name);
      break;
    case 17:
      list17.add(value.name);
      break;
    case 18:
      list18.add(value.name);
      break;
    case 19:
      list19.add(value.name);
      break;
    case 20:
      list20.add(value.name);
      break;
  }
});

console.log('\nWork with Groups\n');

const listIp71 = new List();
const listIp72 = new List();
const listIp73 = new List();
const listIp74 = new List();
const bstGroup = new BinarySearchTree();

set.forEach((value, set) => {
  if (!bstGroup.contains(value.group)) {
    bstGroup.push(value.group);
  }

  switch (value.group) {
    case 'IP-71':
      listIp71.add(value.name);
      break;
    case 'IP-72':
      listIp72.add(value.name);
      break;
    case 'IP-73':
      listIp73.add(value.name);
      break;
    case 'IP-74':
      listIp74.add(value.name);
      break;
  }
});
