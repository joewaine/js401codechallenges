const utils = require('./lib/utils')



  utils.map([1,2,3], utils.doubleIndexes)

  utils.filter([1,2,3], utils.getOdds)


  utils.reduce([1,2,3], utils.addEverythingTogether, 1)