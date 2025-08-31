var createCounter = function(i) {
    let count = i;
    return function() {
        return count++;
    };
};


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
