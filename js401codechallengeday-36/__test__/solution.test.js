'use strict';

const BST = require('../lib/bst');
const TreeNode = require('../lib/tree-node');
const sameBSTCheck = require('../lib/solution');


describe('sameBSTCheck', () => {

    describe('sameBSTCheck function', () => {

        describe('valid input', () => {
            test('should return true if they are same', () => {
                const bst_1 = new BST();
                const one1 = new TreeNode(4);
                const two1 = new TreeNode(2);
                const three1 = new TreeNode(13000);

                bst_1.insert(one1);
                bst_1.insert(two1);
                bst_1.insert(three1);


                const bst_2 = new BST();
                const one2 = new TreeNode(4);
                const two2 = new TreeNode(0);
                const three2 = new TreeNode(13000);

                bst_2.insert(one2);
                bst_2.insert(two2);
                bst_2.insert(three2);


                expect(sameBSTCheck(bst_1, bst_2)).toEqual(true);
            });
            test('return false if not structurally the same', () => {
                const bst_1 = new BST();
                const one1 = new TreeNode(4);
                const two1 = new TreeNode(0);
                const three1 = new TreeNode(800);
                const four1 = new TreeNode(-4);
                bst_1.insert(one1);
                bst_1.insert(two1);
                bst_1.insert(three1);
                bst_1.insert(four1);

                const bst_2 = new BST();
                const one2 = new TreeNode(4);
                const two2 = new TreeNode(0);
                const three2 = new TreeNode(800);
                const four2 = new TreeNode(-10);
                const five2 = new TreeNode(9);
                bst_2.insert(one2);
                bst_2.insert(two2);
                bst_2.insert(three2);
                bst_2.insert(four2);
                bst_2.insert(five2);

                expect(sameBSTCheck(bst_1, bst_2)).toEqual(false);
            });

        });

        describe('test for invalid input', () => {
            test('error expected for invalid inputs', () => {
                expect(() => sameBSTCheck('', '')).toThrow('Invalid input');
            });
        });

    });

});