const Queue = require('./queue')
const karyTree = require('./kary-tree')


const findMostOffspring = module.exports = {

}

let arr = []
let cary = new karyTree();

cary.insert(1)
cary.insert(2,1)
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


let homie = function(tree){

  if(tree === {})return null
    if(typeof tree !== 'object') return null

      tree.breadthFirst(findMostOffspring.leaves)
      console.log(totalsArr[0])
    return totalsArr[0]

}

homie(tree)

}



findMostOffspring.getLeaves(cary)
