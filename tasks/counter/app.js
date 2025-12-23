function makeCounter(initVal = 0){
    let current = initVal;
    return function() {
        const result = current;
        current += 1;
        return result;
    }
}

const counter = makeCounter();
counter();
counter();
counter();
counter();

console.log(counter())