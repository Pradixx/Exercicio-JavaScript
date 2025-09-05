var createCounter = function(counter) {
    let count = counter;
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
