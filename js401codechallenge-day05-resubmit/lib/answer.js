'use strict';

const answer = module.exports = {};

answer.findCenterNode = (head) => {
    if (!head) return null;
    var curr, curr2;

    for (curr = head; curr; curr = curr.next) {
        // If it's not an object return null - 
        if (typeof curr !== 'object') return null;

        let keys = Object.keys(curr);

        if (keys.length !== 2) return null;
        if (!keys.includes('value') || !keys.includes('next')) return null;
    }

    for (curr = curr2 = head; curr2.next && curr2.next.next; curr = curr.next, curr2 = curr2.next.next);

    return curr;
};