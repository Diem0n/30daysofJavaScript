/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    let cache = null    
    return function() {
        if (cache == null){
            cache = n
            return n
        }
        if (cache != null){
            cache = cache + 1
            return cache
        }
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */