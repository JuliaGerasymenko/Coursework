'use strict';

const set = new Set([
  {
    name: 'Brumar Vladislav',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Gerasymenko Julia',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Holub Anna',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Hriny Artem',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Humeinuk Inna',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Denysiuk Daniil',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Eivazova Tatiana',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Zorenko Victoria',
    group: 'IP-74',
    age: 17
  },
  {
    name: 'Karkadim Sofia',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Kaspruk Nastia',
    birth: new Date('2001-01-17'),
    group: 'IP-74',
    age: 17
  },
  { name: 'Korsyn Angelina ',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Kobrii Stepan',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Maksai Anna',
    group: 'IP-74',
    age: 17
  },
  {
    name: 'Mesheriakov Alexandriy',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Moroz Juriy',
    group: 'IP-74',
    age: 20
  },
  {
    name: 'Mushenko Dmytro',
    group: 'IP-74',
    age: 19
  },
  {
    name: 'Pereverziev Luka',
    group: 'IP-74',
    age: 19
  },
  {
    name: 'Rabeshko Olexii',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Simonchuk Bogdan',
    group: 'IP-74',
    age: 19
  },
  { name: 'Sivachenko Marina ',
    group: 'IP-74',
    age: 19
  },
  { name: 'Skrigun Vladislav',
    group: 'IP-74',
    age: 18
  },
  { name: 'Strachko Sergey ',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Tarakhtii Nikita',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Tikhonov Stanislav',
    group: 'IP-74',
    age: 17
  },
  {
    name: 'Fomin Vladislav',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Khilichenko Egor',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Chirko Yaroslav',
    group: 'IP-74',
    age: 19
  },
  {
    name: 'Yashuk Anton',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Yarema Anastasia',
    group: 'IP-74',
    age: 18
  },
  {
    name: 'Yashenko Illia',
    group: 'IP-74',
    age: 18
  }
]);
////LinkedList
function ListForNode(data) {
  this.data = data;
  this.next = null;
}
function List() {
  this.length = 0;
  this.head = null;
}
List.prototype.add = function(value) {
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
};
List.prototype.printList = function() {
  let current = this.head;
  let index = this.length;
  while (index !== 1) {
    console.log(current.data);
    current = current.next;
    index--;
  }
  return current.data;
};
const list16 = new List();
const list17 = new List();
const list18 = new List();
const list19 = new List();
const list20 = new List();
//////////////////end LinkedList///////////////////////
//////////////////start Binary Search Tree///////////////
function Node(value, index) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.index = index;
}

function BinarySearchTree() {
  this.root = null;
}
//Функция добавления элемента в дерево
//////////////////begin push////////////////////
BinarySearchTree.prototype.push = function(value) {
  const tree = this.root;
  if (!tree) {
    this.root = new Node(value, 0);
    return;
  }
  function recurse(tree, index) {
    if (value < tree.value) {
      if (!tree.left) {
        tree.left = new Node(value, index);
        return;
      } else recurse(tree.left, index);
    } else if (!tree.right) {
      tree.right = new Node(value, index);
      return;
    } else recurse(tree.right, index);
  }
  ////////////////////push right index///////////
  let index;
  if (value < tree.value) index = -1;
  else index = 1;
  recurse(tree, index); //recurse(this);
};
////////////////////end push///////////////////
/////////////для балансировки bstName
///////////////////Rotation//////////////
BinarySearchTree.prototype.rotation = function() {
  const root = this.root;
  let leftIndex = 0;
  const rightIndex = 0;
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
  const difference =  leftIndex + rightIndex;
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
};
///////////Для балансировки bstAge и bstGroup//////////
/////////////begin doBalanced/////////////
BinarySearchTree.prototype.doBalanced = function() {
  const root = this.root;
  let leftIndex = 0;
  let rightIndex = 0;
  function recurseLeft(tree) {
    if (tree !== null) {
      recurseLeft(tree.left);
      leftIndex--;
      recurseLeft(tree.right);
    }
  }
  recurseLeft(root.left);

  function recurseRight(tree) {
    if (tree !== null) {
      recurseRight(tree.left);
      rightIndex++;
      recurseRight(tree.right);
    }
  }
  recurseRight(root.right);

  function minimum(tree) {
    if (!tree || !tree.left) return tree;
    return minimum(tree.left);
  }
  function maximum(tree) {
    if (!tree || !tree.right) return tree;
    return maximum(tree.right);
    //  recurseRight(root.right);
  }
  //  let root = this.root;
  const difference =  leftIndex + rightIndex;
  const min = minimum(root.right);
  const max = maximum(root.left);

  if (difference === -2) {
    this.root = max;
    if (root.left.right) {
      if (!root.left.right.right) {
        root.left.right = max.left;
        //root.left.right = null;
      } else if (!root.left.right.right.right) {
        root.left.right.right = max.left;
      } else  if (!root.left.right.right.right.right) {
        root.left.right.right.right = max.left;
      }
      this.root.left = root.left;
    }
    root.left = null;
    this.root.right = root;
    this.root.index = 0;
    root.index = 1;
  } else if (difference === 2) {
    this.root = min;
    if (root.right.left) {
      if (!root.right.left.left) {
        root.right.left = min.right;///
      } else if (!root.right.left.left.left) {
        root.right.left.left = min.right;
      } else if (!root.right.left.left.left.left) {
        root.right.left.left.left = min.right;
      }
      this.root.right = root.right;
    }
    root.right = null;
    this.root.left = root;
    this.root.index = 0;
    root.index = -1;
  }
  return this.root;
};
//////////////////end doBalanced//////////////
//////////////////begin contains//////////////////////
BinarySearchTree.prototype.contains = function(value) {
  let doesContain = false;
  const node = this.root;
  function recursive(node, value) {
    if (node === null) doesContain = false;
    else if (value < node.value) return recursive(node.left, value);
    else if (value > node.value) return recursive(node.right, value);
    else  doesContain = true;
  }
  recursive(node, value);
  console.log(doesContain);//Содержит ли элемент
  return doesContain;
};
// /////////////////end contains///////////////////

///////////////////Using///////////////////////
console.log('\nWork with Names\n');
const bstName = new BinarySearchTree();
set.forEach((value, set) => {
  bstName.push(value.name);
  bstName.rotation();//for names only
});

/////////////born///////////////////
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
//////////group//////////////////
console.log('\nWork with Groups\n');
const listIp71 = new List();
const listIp72 = new List();
const listIp73 = new List();
const listIp74 = new List();
const bstGroup = new BinarySearchTree();
//////////////////////////////////
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

// console.dir(bstAge.root);
console.log('\nName\n');
console.dir(bstName.root);
console.dir(bstName);
// console.log("Printlist function");
// console.log(bstAge);
console.log('18 years old');
console.log(list18.printList());
console.log('17 years old');
console.log(list17.printList());
console.log('\nGroup\n');
console.dir(bstGroup);
console.log(listIp74.printList());
