const Queue = require('./queue')
const karyTree = require('./kary-tree')


const findNoOffspring = module.exports = {

}

let arr = []

let cary = new karyTree();



cary.insert(1)
cary.insert(2,1)
cary.insert(3,2)
cary.insert(4,3)
let total = 0

findNoOffspring.leaves = function(current){

total += current.val.val
  if(current.val.children.length === 0){
    arr.push(current.val.val)
  }
}

findNoOffspring.getLeaves = function(tree){

  if(tree === {})return null

    if(typeof tree !== 'object') return null

      tree.breadthFirst(findNoOffspring.leaves)

    return total
}





// findNoOffspring.getLeaves(cary)
