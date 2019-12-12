/**
 * Optimization technique
 * Use caching
 */

function addTo80(n) {
    console.log('long time opération');
    return n + 80;
}
addTo80(5);
addTo80(5);
addTo80(5);
//Here, we call the function 3 times, and do the same long operation over and over
//Above, same exemple with caching
let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n]
    } else {
        console.log('long time opération');
        cache[n] = n + 80;
        return cache[n];
    }
}
memoizedAddTo80(5);
memoizedAddTo80(5);
memoizedAddTo80(5);


//We dont want to pollue the global scope with the cache
//Instead, we can use closure
function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n]
        } else {
            console.log('long time opération');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo80();
memoized(5);
memoized(5);



