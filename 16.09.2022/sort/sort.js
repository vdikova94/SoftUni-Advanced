function sort(input) {
    let newArray = [];
    let acendingArray = input.slice().sort((a, b) => a - b);

    for (let i = 0; i < input.length; i++) {
        if (acendingArray.length === 0) {
            break;
        }
        let maxNum = acendingArray.shift();
        newArray.push(maxNum);
        let minNum = acendingArray.pop();
        newArray.push(minNum);
    }
    return newArray;
}
console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));