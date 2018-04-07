'use strict';

const solution = require('../lib/answer');

describe('answer', () => {
  describe('find the middle node', () => {
    const cleanLinkedList = {
      'value': 5,
      'next': {
        'value': 6,
        'next': {
          'value': 7,
          'next': {
            'value': 8,
            'next': null,
          },
        },
      },
    };

    const listWithBadValues = {
      'value': 5,
      'next': {
        'value': 6,
        'next': {
          'randomProperty': 7,
          'next': {
            'value': 8,
            'next': null,
          },
        },
      },
    };

    const listWithBadValues2 = {
      'value': 1,
      'next': 'ideally this should be another node or null - but it is a string, so this will cause issues and fail - returning null.',
    };

    // valid data case
    it('should return middle node from a valid linked list', () => {
      expect(solution.findCenterNode(cleanLinkedList).value).toEqual(6);
    });

    // testing for fails
    it('return null for edge cases such as invalid linked lists', () => {
      expect(solution.findCenterNode(listWithBadValues)).toEqual(null);
      expect(solution.findCenterNode(listWithBadValues2)).toEqual(null);
    });

    it('return the middle node of a linked list given the head', () => {
      expect(solution.findCenterNode(null)).toEqual(null);

    });
  });
});