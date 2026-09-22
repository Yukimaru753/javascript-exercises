const reverseString = function(string) {
    return string.split("").reverse().join("");
    // join("")　文字列を一つにまとめる
    // reduce((result, letter) => result + letter;, ""); 
    // 自分でルールを決めて一つに集約
};

// Do not edit below this line
module.exports = reverseString;
