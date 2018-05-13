'use strict';

const set = new Set([
  { name: 'Vlad Skrigun',
    birth: new Date('2000-08-12'),
    group: 'IP-74',
    // age(){
    //   const difference = new Date() - this.birth;
    //   return Math.floor(difference / 31536000000);},
    age: 18,
    regionalCenter: 'Kiev' },
  {
    name: 'Julia Gerasymenko',
    birth: new Date('2000-01-18'),
    group: 'IP-74',
    // age(){
    //   const difference = new Date() - this.birth;
    //   return Math.floor(difference / 31536000000);},
    age: 18,
    regionalCenter: 'Lugansk' },

  {
    name: 'Nastia Kaspruk',
    birth: new Date('2001-01-17'),
    group: 'IP-74',
    // age(){
    //   const difference = new Date() - this.birth;
    //   return Math.floor(difference / 31536000000);},
    age: 17,
    regionalCenter: 'Kiev' },
]);
// const data = [
//   ['Vlad Skrigun', '18', 'IP-74', 'Kiev'],
//   ['Julia Gerasymenko', '18', 'IP-74', 'Severodonetsk']
// ];

////LinkedList
function listForNode(data){
  this.data = data;
  this.next = null;
}
function List(){
  this.length = 0;
  this.head = null;
}
List.prototype.add = function(value){
  let node = new listForNode(value);
   let current = this.head;
  if(this.length === 0){
    this.head = node;
  } else {
    let index = this.length;
    while(index !== 1){
      current = current.next
      index--;
    }
    current.next = node;
  }
  this.length++;
  return node;
};
List.prototype.printList = function(){
  let current = this.head;
  let index = this.length;
  while(index !== 1){
    console.log(current.data);
    current = current.next;
    index--;
  }
  return current.data;
};
const list17 = new List();
const list18 = new List();
const list19 = new List();
//////////////////end LinkedList///////////////////////
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}
BinarySearchTree.prototype.push = function(val) {
  const root = this.root;
  if (!root) {
    this.root = new Node(val);
    return;
  }
  let currentNode = root;
  const newNode = new Node(val);
  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else currentNode = currentNode.left;
    } else if (!currentNode.right) {
      currentNode.right = newNode;
      break;
    } else {
      currentNode = currentNode.right;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {

  let doesContain = false;

  function recurse(bst) {

    if (bst.value === value) {

      doesContain = true;

    } else if (bst.left !== undefined && value < bst.value) {

      recurse(bst.left);

    } else if (bst.right !== undefined && value > bst.value) {

      recurse(bst.right);
    }
  }
  recurse(this);
  return doesContain;

};
// const bstName = new BinarySearchTree();
//
// set.forEach((value, set) => {
//   bstName.push(value.name);
// });
// console.dir(bstName.root);
//////////group//////////////////
const list_ip71 = new List();
const list_ip72 = new List();
const list_ip73 = new List();
const list_ip74 = new List();
let bstGroup = new BinarySearchTree();
 //////////////////////////////////
set.forEach((value,set) => {
  if(!bstGroup.contains(value.group)){
    bstGroup.push(value.group);
  }
  switch(value.group){
    case 'IP-71':
      list_ip71.add(value.name);
      break;
    case 'IP-72':
      list_ip72.add(value.name);
      break;
    case 'IP-73':
      list_ip73.add(value.name);
      break;
    case 'IP-74':
      list_ip74.add(value.name);
      break;
  }
});
// ///////////born///////////////////
let bstAge = new BinarySearchTree();
set.forEach((value, set) => {
  if(!bstAge.contains(value.age)){
    bstAge.push(value.age);
  }
  //console.log(value.age);
  switch(value.age){
    case 17:
      list17.add(value.name);
      break;
    case 18:
      list18.add(value.name);
      break;
    case 19:
      list19.add(value.name);
      break;
  }
});
///////////city///////////////
let bstRegion = new BinarySearchTree();
set.forEach((value, set) => {
  if(!bstRegion.contains(value.regionalCenter)){
    bstRegion.push(value.regionalCenter);
  }
  switch (value.regionalCenter) {
    case 'Kiev':
      listKiev.add(value.name);
      break;
      case 'Cherkasy':
        listCherkasy.add(value.name);
        break;
        case 'Chernihiv':
          listChernihiv.add(value.name);
          break;
          case 'Chernivtsi':
            listChernivtsi.add(value.name);
            break;
            case 'Dnipropetrovsk':
              listDnipropetrovsk.add(value.name);
              break;
              case 'Donetsk':
                listDonetsk.add(value.name);
                break;
                case 'Ivano-Frankivsk':
                  listIvanoFrankivsk.add(value.name);
                  break;
                  case 'Kharkiv':
                    listKharkiv.add(value.name);
                    break;
                    case 'Kherson':
                      listKherson.add(value.name);
                      break;
                      case 'Khmelnytskyi':
                        listKhmelnytskyi.add(value.name);
                        break;
                        case 'Kirovograd':
                          listKirovograd.add(value.name);
                          break;
                          case 'Lugansk':
                            listLugansk.add(value.name);
                            break;
                            case 'Lviv':
                              listLviv.add(value.name);
                              break;
                              case 'Mykolaiv':
                                listMykolaiv.add(value.name);
                                break;
                                case 'Odessa':
                                  listOdessa.add(value.name);
                                  break;
                                  case 'Poltava':
                                    listPoltava.add(value.name);
                                    break;
                                    case 'Pivne':
                                      listPivne.add(value.name);
                                      break;
                                      case 'Sumy':
                                        listSumy.add(value.name);
                                        break;
                                        case 'Ternopil':
                                          listTernopil.add(value.name);
                                          break;
                                          case 'Vinnytsia':
                                            listVinnytsia.add(value.name);
                                            break;
                                            case 'Volyn':
                                              listVolyn.add(value.name);
                                              break;
                                              case 'Zakarpattia':
                                                listZakarpattia.add(value.name);
                                                break;
                                                case 'Zaporizhia':
                                                  listZaporizhia.add(value.name);
                                                  break;
                                                  case 'Zhytomyr':
                                                    listZhytomyr.add(value.name);
                                                    break;

  }
});
//////////////////////////////
// console.dir(bstAge.root);
// console.log("\nName\n");
// console.dir(bstName.root);
// console.log("Printlist function");
// console.log(bstAge);
// console.log(list18.printList());
// console.log(list17.printList());
// console.log("\nGroup\n");
// console.log(bstGroup.root);
// console.log(list_ip74.printList());
