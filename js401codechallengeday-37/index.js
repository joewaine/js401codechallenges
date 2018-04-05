
'use strict';

const binaryTreeToLinkList = require('./lib/solution');
const BST = require('./lib/bst').BinarySearchTree;
const TreeNode = require('./lib/bst').TreeNode;



let house = new BST()
// console.log(house)


let one = new TreeNode(1);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);


house.insert(four)
house.insert(five)
house.insert(six)
house.insert(seven)
house.insert(one)




let alertion = function(e){
  console.log(e)
}


// house.inOrderTraversal(alertion)
// house.postOrderTraversal(alertion)
house.preOrderTraversal(alertion)

// console.dir(house, {depth: null})



// house.find(4)