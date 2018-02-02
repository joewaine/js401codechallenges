const Queue = require('./queue')
const karyTree = require('./kary-tree')


const findNoOffspring = module.exports = {

}

let arr = []

findNoOffspring.leaves = function(current){
  if(current.val.children.length === 0){
    arr.push(current.val)
  }
}

findNoOffspring.getLeaves = function(tree){
  if(typeof tree !== 'object') return null
  tree.breadthFirst(findNoOffspring.leaves)
  console.log(arr);
  return arr
}
