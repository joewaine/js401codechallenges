'use strict';


// the solution will require the SLL, BST, and TreeNode class of the binary search tree
const SLL = require('./sll');
const BST = require('./bst').BinarySearchTree;
const TreeNode = require('./bst').TreeNode;

// given a binary tree, return a link list
module.exports = (bTree) => {
    // if there is no binary tree supplied throw an error
    if (!bTree)
        throw new Error('binary tree must be true');
    // if the supplied btree is not an object throw an error
    if (typeof bTree !== 'object')
        throw new TypeError('binary tree must be an object');

    // we let the keys variable map through the Object.keys javascript object method to sort the keys of the object into an array
    let keys = Object.keys(bTree).map(k => k.toLowerCase()).sort();
    // the binary tree must have a root property, so an error should be thrown if not
    if (keys[0] !== 'root' || keys.length !== 1)
        throw new TypeError('binary tree must only have a root property');
    // if the binary tree doesnt have an in order traversal method, throw an error also
    if (typeof bTree.inOrderTraversal !== 'function')
        throw new Error('binary tree must support an in order traversal');
    // if the binary tree is empty, return null.
    if (!bTree.root) return null;
    let sll = new SLL();

    // do an in order traversal of the binary tree and insert the values into an ascended order SLL
    bTree.inOrderTraversal(value => sll.insertAscending(value));
    //finally return the singly linked list
    return sll;
};