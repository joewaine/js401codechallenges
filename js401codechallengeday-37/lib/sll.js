'use strict';

// importing the node constructor
const Node = require('./node');


class SLL {
// basic constructor for an SLL - setting a null property for the head and an initial length of 0
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // i want to insert a head - so i used the node constructor required at the top of this file to do so.
    insertHead(value) {
        if (!value && value !== 0) return this;
        // (a node simply consists of a value and an next property)
        let node = new Node(value);
        // once we have the new node, we set the next propery of the node to the head of the SLL,
        // followed by setting the head to the value of the node
        node.next = this.head;
        this.head = node;
        // we then increase the length of the sll by one, since we are inserting a new head, adding the length.
        this.length++;
        return this;
    }

    // currently only supports numbers
    // BigO(n) worst case
    insertAscending(value) {
        if (typeof value !== 'number')
            throw Error('Error: only numbers supported for insertAscending');

        // again will create a new node object here with the value
        let node = new Node(value);
        //if there is no head or of the heads value is bigger that or equal to the value,
        //we procedd by setting the next property of the node to the the value of the head of the linked list,
        // and again follow this by setting the value of the head of the linked list to the value of the new node object,
        // and adding one to the lenght property
        if (!this.head || this.head.value >= value) {
            node.next = this.head;
            this.head = node;
            this.length++;
            return this;
        }

        // we set a variable equal to the head, then iterate through the list until we can add the new node in in order. 
        let cur = this.head;
        while (cur.next && cur.next.value < value) {
            cur = cur.next;
        }
        node.next = cur.next;
        cur.next = node;

        return this;
    }


    // this method on the SLL adds to the end of the list, a more conventional approach,
    // or semantic at least - when considering how a list is usually constructed in order
    insertEnd(value) {
        if (!value && value !== 0) return this;
        // If the list was empty
        if (!this.length) {
            return this.insertHead(value);
        }

        let node = new Node(value);
        // Find the last node, then add to it, using a simple for loop,
        //setting itr to the looping variable, using the .next property of the node as the conditional,
        //then setting the incrementation paramater as the initial iteration variable for looping as the next propery on the head,
        // which is set to the Node object., then finally setting the next to node, and adding 1 to the length of the list. 
        let itr;
        for (itr = this.head; itr.next; itr = itr.next);

        itr.next = node;
        this.length++;

        return this;
    }



    // this reverse method is very powerful and was hard to get my head around initially.
    reverse() {
        if (!this.length) return this;

        //you need three variables here, the previous,
        //the current and the next node, so you can simultaneiously rotate the positioning of the node and its context.
        let prev = null;
        let cur = this.head;
        let next;


        // this is the magic loop:
        while (cur) {
            // the previously initialized next variable is set tot the current nodes 'next' property
            next = cur.next;
            // following that, the cur.next is set to the 'null' initialized variable of prev
            cur.next = prev;
            // the prev variable which is equal to null is then set to the head (or cur) 
            prev = cur;
            // cur is then set to the value of next, which was previously set to the next value of the head.
            cur = next;
        }
        // after this while loop is completed, the head is reassigned and the linked list has been reversed!
        // Finally, reassign the head
        this.head = prev;

        return this;
    }

    // offset is treated as an index (e.g. the list starts at 0)
    remove(offset) {
        let node;
        // Nothing to remove
        if (!this.length) return null;
        // It can't be removed if it doesn't exist
        if (offset > this.length - 1) return null;

        // When the node to remove is the head
        if (offset === 0) {
            node = this.head;
            this.head = this.head.next;
            this.length--;
            node.next = null;
            return node;
        }

        // Find the node before the one to remove
        let itr;
        for (itr = this.head; offset - 1 > 0; itr = itr.next, offset--);

        // Remove it
        node = itr.next;
        itr.next = itr.next.next;
        this.length--;
        node.next = null;
        return node;
    }

    findNthNodeFromEnd(n) {
        // We can't find it if it doesn't exist
        if (n < 0 || n > this.length - 1) return null;

        // Find the node
        let x = this.length - n;
        let itr;
        for (itr = this.head; x > 1; itr = itr.next, x--);

        return itr;
    }
}

module.exports = SLL;