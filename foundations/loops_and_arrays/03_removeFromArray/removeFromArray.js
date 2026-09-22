const removeFromArray = function(array, ...words) {
    // ...word:残余引数、配列で受け取れる
    return array.filter((item) => !words.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
