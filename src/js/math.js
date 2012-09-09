/*global vtcc*/

vtcc.math = (function(){

  function _prepMathArgs(){
    var args = vtcc.util.flatten(arguments),
        sanitizedArgs = [];

    for (var i = 0; i < args.length; i++) {
      if (isNaN(parseFloat(args[i])) === false) {
        sanitizedArgs.push(args[i]);
      }
    }

    return sanitizedArgs;
  }

  function max(){
    return Math.max.apply(Math, _prepMathArgs(arguments));
  }

  function min(){
    return Math.min.apply(Math, _prepMathArgs(arguments));
  }

  return {
    max: max,
    min: min
  };
}());