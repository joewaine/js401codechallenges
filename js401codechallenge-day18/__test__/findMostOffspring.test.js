const Queue = require('../lib/queue')
const karyTree = require('../lib/kary-tree')
// const findMostOffspring = require('../lib/findMostOffspring')
require('jest');


const findMostOffspring = module.exports = {

}

let arr = []
let cary = new karyTree();

cary.insert(1)
cary.insert(2,1)
cary.insert(5,1)
cary.insert(6,1)
cary.insert(7,1)
cary.insert(8,1)
cary.insert(3,2)
cary.insert(4,3)

let total = 0
let totalsArr = []

findMostOffspring.leaves = function(current){

totalsArr.reverse()
  if(totalsArr.length > 0){
    if(totalsArr[0].childrenLength < current.val.children.length){
      totalsArr.shift()
      totalsArr.push({currentVal : `${current.val.val}`, childrenLength : `${current.val.children.length}`})
    }
    }else{
      totalsArr.push({currentVal : `${current.val.val}`, childrenLength : `${current.val.children.length}`})
}

total += current.val.val
  if(current.val.children.length === 0){
    arr.push(current.val.val)
  }
}

findMostOffspring.getLeaves = function(tree){

  if(tree === {})return null
      if(typeof tree !== 'object') return null

tree.breadthFirst(findMostOffspring.leaves)

      return totalsArr[0]

}

describe('', function () {

  describe('correct answer', () => { //test node construcor

    it('the node of the value of 1 should have the most children at 5', () => {
      expect(findMostOffspring.getLeaves(cary)).toEqual({ currentVal: '1', childrenLength: '5' })
    })

    it('return null if input is not given', () => {
      expect(findMostOffspring.getLeaves()).toBe(null)
    })

    it('return null if the input is an incorrect datatype', () => {
      expect(findMostOffspring.getLeaves('ads')).toBe(null)
    })


  })



});
