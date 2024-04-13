/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = []
    arr.forEach((el, index) => fn(el, index) ? result.push(el) : null)
    return result
};