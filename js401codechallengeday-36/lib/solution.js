'use strict';

const BST = require('./bst');

function sameBSTCheck(bst1, bst2) {
    if (!(bst1 instanceof BST) || !(bst2 instanceof BST)) {
        throw new Error('Invalid input');
    }

    let bst1Arr = bst1.preOrderTraversal();
    let bst2Arr = bst2.preOrderTraversal();

    if (bst1Arr.length !== bst2Arr.length) {
        return false;
    }
    for (let i = 0; i < bst1Arr.length; i++) {
        if (bst1Arr[i] !== bst2Arr[i]) {
            return false;
        }
    }
    return true;
}

module.exports = sameBSTCheck;