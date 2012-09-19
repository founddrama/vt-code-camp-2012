/*global vtcc:true*/

vtcc.math = (function(){

  /**
   * Takes any number of arguments (of any type) and prepares them for
   * consumption by other methods in this suite.
   *
   * @param {Mixed/Variable}
   * @return {Array} sanitized arguments
   * @private
   */
  function _prepMathArgs(){
    var args = vtcc.util.flatten.apply(this, arguments),
        sanitizedArgs = [];

    for (var i = 0; i < args.length; i++) {
      if (isNaN(parseFloat(args[i])) === false) {
        sanitizedArgs.push(args[i]);
      }
    }

    return sanitizedArgs;
  }

  /**
   * Takes any number of arguments (of any type), sanitizes them to just numbers,
   * and returns the largest value.
   *
   * @param {Mixed/Variable}
   * @return {Number}
   */
  function max(){
    return Math.max.apply(Math, _prepMathArgs.apply(this, arguments));
  }

  /**
   * Takes any number of arguments (of any type), sanitizes them to just numbers,
   * and returns the smallest value.
   *
   * @param {Mixed/Variable}
   * @return {Number}
   */
  function min(){
    return Math.min.apply(Math, _prepMathArgs.apply(this, arguments));
  }

  return {
    max: max,
    min: min
  };
}());