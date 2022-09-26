function addOrRemove(input) {
    let newArray = [];
    let num = 1;
    for (let command of input) {
        command === "add" ? newArray.push(num) : newArray.pop();
        num++;
    }
    newArray.length === 0 ? console.log("Empty") : newArray.forEach(element => { console.log(element); })
}
addOrRemove(
    ['add',
        'add',
        'add',
        'add'
    ]
)