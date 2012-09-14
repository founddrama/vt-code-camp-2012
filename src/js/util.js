/*global vtcc*/
vtcc = window['vtcc'] || {};

vtcc.util = (function(){

  /**
   * Naively and optimistcally flattens an Array -- recursively!
   */
  function flatten(){
    var args = Array.prototype.slice.call(arguments, 0),
        flattenedArgs = [],
        current;

    while (args.length) {
      current = args.shift();
      if (isArray(current)) {
        current = flatten.apply(this, current);
      }
      flattenedArgs = flattenedArgs.concat(current);
    }

    return flattenedArgs;
  }

  function isArray(a){
    return Object.prototype.toString.call(a) === '[object Array]';
  }

  return {
    flatten: flatten,
    isArray: isArray
  };

}());