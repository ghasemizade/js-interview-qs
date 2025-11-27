

function mean(myArr) {
    if (myArr.length === 0) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < myArr.length; i++) {
        sum += myArr[i];
    }
    return sum / myArr.length;
}

console.log(mean([1, 2, 2]));
