function rotateArray(array, rotateCount) {
    for (let i = 0; i < rotateCount; i++) {
        let element = array.pop()
        array.unshift(element);
    }
    return array.join(' ');
}
console.log(rotateArray(
    ['1',
        '2',
        '3',
        '4'
    ], 2));