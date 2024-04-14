/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    function reducer(prev, curr) {
        return fn(prev, curr);
    }

    if (nums.length === 0) {
        return init;
    }
    
    var result = init;
    
    for (var i = 0; i < nums.length; i++) {
        result = reducer(result, nums[i]);
    }
    
    return result;
};