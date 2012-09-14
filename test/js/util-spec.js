/*global describe:true it:true expect:true vtcc:true*/
describe('vtcc.util.flatten', function(){

  it('returns the same array, given a flat array', function(){
    expect(vtcc.util.flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns a flattened array, given a 2D array', function(){
    expect(vtcc.util.flatten([1, 1], [2, 2], [3, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('returns a flattened array, given an array with arbitrary depth', function(){
    expect(vtcc.util.flatten([1, [2, [3, 4]], 5, [[[[[6]]]]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('will return that argument as a single-item array, given a non-array as an argument', function(){
    expect(vtcc.util.flatten(true)).toEqual([true]);
    expect(vtcc.util.flatten('string')).toEqual(['string']);
    expect(vtcc.util.flatten(1)).toEqual([1]);
    expect(vtcc.util.flatten({a: false})).toEqual([{a: false}]);
    expect(vtcc.util.flatten(null)).toEqual([null]);
  });

  it('combines multiple arguments into a flattened array', function(){
    expect(vtcc.util.flatten(true, false, [1, 2, [3]])).toEqual([true, false, 1, 2, 3]);
  });

});

describe('vtcc.util.isArray', function(){
  it('returns true for an array', function(){
    expect(vtcc.util.isArray([])).toBe(true);
  });

  it('returns false for the "array-like" arguments object', function(){
    (function(){
      expect(vtcc.util.isArray(arguments)).toBe(false);
    }([]));
  });

  it('returns false for an object', function(){
    expect(vtcc.util.isArray({})).toBe(false);
  });

  it('returns false for a string', function(){
    expect(vtcc.util.isArray('string')).toBe(false);
  });

  it('returns false for numbers', function(){
    expect(vtcc.util.isArray(1)).toBe(false);
    expect(vtcc.util.isArray(1.0)).toBe(false);
    expect(vtcc.util.isArray(0xaa)).toBe(false);
    expect(vtcc.util.isArray(077)).toBe(false);
  });

  it('returns false for booleans', function(){
    expect(vtcc.util.isArray(true)).toBe(false);
    expect(vtcc.util.isArray(false)).toBe(false);
  });

  it('returns false for null', function(){
    expect(vtcc.util.isArray(null)).toBe(false);
  });

  it('returns false for undefined', function(){
    expect(vtcc.util.isArray(undefined)).toBe(false);
  });
});