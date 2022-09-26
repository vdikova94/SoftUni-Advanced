function listName(input) {
    let num = 0;
    let sortedList = input.sort((a, b) => a.localeCompare(b));
    sortedList.forEach(element => {
        num++;
        console.log(`${num}.${element}`);
    });
}
listName(["John", "Bob", "Christina", "Ema"])