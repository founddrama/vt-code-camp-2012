/*global vtcc:true*/
vtcc = window['vtcc'] || {};

vtcc.util = (function(){

  /**
   * Naively and optimistcally flattens an Array -- recursively!
   *
   * @param {Mixed/Variable} Takes any number of arguments (of any type) and
   * attempts to merge them into a flattened/1D Array.
   * @return {Array}
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

  /**
   * Tests an arbitrary argument for Array-ness.
   *
   * @param {Mixed}
   * @return {Boolean}
   */
  function isArray(a){
    return Object.prototype.toString.call(a) === '[object Array]';
  }

  return {
    flatten: flatten,
    isArray: isArray
  };

}());