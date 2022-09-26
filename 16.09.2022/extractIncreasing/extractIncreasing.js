function extractIncreasing(input) {
    let newArray = [];
    let biggestNum = input[0];

    for (let element of input) {
        if (element >= biggestNum) {
            newArray.push(element);
            biggestNum = element;
        }
    }

    return newArray;
}
console.log(extractIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]));