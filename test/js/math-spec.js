/*global describe:true it:true expect:true vtcc:true*/
describe('vtcc.math.max', function(){
  it('returns the maximum number from an array of numbers.', function(){
    expect(vtcc.math.max(1, 2, 3)).toBe(3);
    expect(vtcc.math.max(3, 2, 1)).toBe(3);
    expect(vtcc.math.max([1, 2, 3])).toBe(3);
  });

  it('returns the maximum number from a arbitrary mix of numbers and arrays containing numbers.', function(){
    expect(vtcc.math.max(1, [2, 3])).toBe(3);
    expect(vtcc.math.max([1, [2, 3]])).toBe(3);
    expect(vtcc.math.max(1, [[[2]]], 3)).toBe(3);
  });

  it('correctly coerces "number-like" strings into numbers for the comparisons.', function(){
    expect(vtcc.math.max(1, '2', '3.0')).toBe(3);
    expect(vtcc.math.max('3', '1', '2')).toBe(3);
  });

  it('correctly discards non-"number-like" values before making the comparisons.', function(){
    expect(vtcc.math.max(1, 2, 3, 'string')).toBe(3);
    expect(vtcc.math.max(1, 2, 3, null)).toBe(3);
    expect(vtcc.math.max(1, 2, 3, undefined)).toBe(3);
    expect(vtcc.math.max(1, 2, 3, [])).toBe(3);
    expect(vtcc.math.max(1, 2, 3, {})).toBe(3);
    expect(vtcc.math.max(1, 2, 3, true)).toBe(3);
    expect(vtcc.math.max(1, 2, 3, false)).toBe(3);
  });
});

describe('vtcc.math.min', function(){
  it('vtcc.math.max returns the maximum number from an array of numbers.', function(){
    expect(vtcc.math.min(1, 2, 3)).toBe(1);
    expect(vtcc.math.min(3, 2, 1)).toBe(1);
    expect(vtcc.math.min([1, 2, 3])).toBe(1);
  });

  it('returns the maximum number from a arbitrary mix of numbers and arrays containing numbers.', function(){
    expect(vtcc.math.min(1, [2, 3])).toBe(1);
    expect(vtcc.math.min([1, [2, 3]])).toBe(1);
    expect(vtcc.math.min(1, [[[2]]], 3)).toBe(1);
  });

  it('correctly coerces "number-like" strings into numbers for the comparisons.', function(){
    expect(vtcc.math.min(1, '2', '3.0')).toBe(1);
    expect(vtcc.math.min('3', '1', '2')).toBe(1);
  });

  it('correctly discards non-"number-like" values before making the comparisons.', function(){
    expect(vtcc.math.min(1, 2, 3, 'string')).toBe(1);
    expect(vtcc.math.min(1, 2, 3, null)).toBe(1);
    expect(vtcc.math.min(1, 2, 3, undefined)).toBe(1);
    expect(vtcc.math.min(1, 2, 3, [])).toBe(1);
    expect(vtcc.math.min(1, 2, 3, {})).toBe(1);
    expect(vtcc.math.min(1, 2, 3, true)).toBe(1);
    expect(vtcc.math.min(1, 2, 3, false)).toBe(1);
  });
});