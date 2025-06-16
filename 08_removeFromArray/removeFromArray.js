const removeFromArray = function() {
    if (arguments.length == 0) {
        console.error("no input for function removeFromArray");
        return;
    }
    let arr = arguments[0];
    function needRemove(elem, arg) {
        for (let i=1;i<arg.length;i++) {
            if (elem === arg[i]) { // not "=="!
                return true;
            }
        }
        return false;
    }
    let removedArray = [];
    for (const elem of arr) {
        if (!needRemove(elem, arguments)) {
            removedArray.push(elem);
        }
    }

    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
