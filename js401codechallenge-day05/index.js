'use strict'

const link = require('./lib/link');
require('jest');

let linkList = {
    value: 0,
    next: {
        value: 1,
        next : {
            value: 2,
            next : {
              value: 3,
              next : {
                  value: 4,
                  next : {
                  value: 5,
                  next : {
                  value: 6,
                  next : {
                  value: 7,
                  next : null
            }
            }
            }
            }
            }
        }
    }
};

link.linkfinder(linkList);

