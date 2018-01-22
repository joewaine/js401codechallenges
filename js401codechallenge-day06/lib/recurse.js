const recurse = module.exports = {};

recurse.conLog = function(){
  return undefined;
}

recurse.loop = function(count,callback){
  if(count <= 0 || typeof count !== 'number') return null;
  callback();
  recurse.loop(count - 1, callback);
}