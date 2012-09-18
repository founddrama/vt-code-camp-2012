/*global vtcc:true*/

vtcc.math = (function(){

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

  function max(){
    return Math.max.apply(Math, _prepMathArgs.apply(this, arguments));
  }

  function min(){
    return Math.min.apply(Math, _prepMathArgs.apply(this, arguments));
  }

  return {
    max: max,
    min: min
  };
}());