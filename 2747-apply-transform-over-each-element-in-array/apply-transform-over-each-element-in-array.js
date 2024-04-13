/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let temp = []
    for (i=0;i<arr.length;i++){
        temp.push(fn(arr[i],i))

    } 
    return temp
};