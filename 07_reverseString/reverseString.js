const reverseString = function(str) {
    let reversedString = "";
    for (let i=0;i<str.length;i++) {
        reversedString += str[str.length-1-i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
