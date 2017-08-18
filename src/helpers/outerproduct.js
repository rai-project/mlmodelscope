/**
 * Calculates the outer product of the dimension array.
 * The output will be a collection of array that each is composed of all dimensions.
 * @example
 * // returns [['a', 1], ['b', 1], ['a', 2], ['b', 2]]
 * require('outer-product')([['a', 'b'], [1, 2]])
 * @param {Array.<Array>} dimensions
 * @returns {Array.<Array>} Combinations of all dimensions
 */
export default function outerProduct(dimensions) {
  if (!Array.isArray(dimensions)) throw new Error("Array expected");
  if (!dimensions.length) return [];

  var results = [];
  var dimsCount = dimensions.length;
  var i;
  // the size of each dimension
  var sizes = [];
  // the position of each dimension
  var positions = [];
  var position;
  var result;
  var total = 1;
  var dim;
  var lastDimOverflowed;

  var l = dimsCount;
  while (l--) {
    positions[l] = 0;
    sizes[l] = dimensions[l].length;
    total *= sizes[l];
  }

  for (i = 0; i < total; i++) {
    result = [];
    lastDimOverflowed = true;
    for (dim = 0; dim < dimsCount; dim++) {
      position = positions[dim];
      result.push(dimensions[dim][position]);
      if (lastDimOverflowed) {
        position = (position + 1) % sizes[dim];
        positions[dim] = position;
        lastDimOverflowed = position == 0;
      }
    }
    results.push(result);
  }

  return results;
}

// The MIT License (MIT)

// Copyright (c) 2015 Tal

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
