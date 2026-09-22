const removeFromArray = function(array, ...words) {
    // ...word:残余引数、配列で受け取れる
    let removedArray = [];
    for (const item of array) {
        if(!words.includes(item)) {
            removedArray.push(item);
        }
    }
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
