/*global vtcc*/

vtcc.util = (function(){

  /**
   * Naively and optimistcally flattens an Array -- recursively!
   */
  function flatten(){
    var args = getArgs(arguments),
        flattenedArgs = [],
        current;

    while (args.length) {
      current = args.shift();
      if (isArray(current)) {
        current = flatten(current);
      }
      flattenedArgs = flattenedArgs.concat(current);
    }

    return flattenedArgs;
  }

  function getArgs(){
    return Array.prototype.slice.call(arguments);
  }

  function isArray(a){
    return Object.prototype.toString.call(a) === '[object Array]';
  }

  return {
    flatten: flatten,
    getArgs: getArgs,
    isArray: isArray
  };

}());