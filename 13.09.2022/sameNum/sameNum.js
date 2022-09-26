function sameNum(number) {
    let numArray = String(number).split('');
    let flag = true;
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        let num = numArray[i];
        sum += Number(num);
        let nextNum = numArray[i + 1];
        if (nextNum === undefined) {
            break;
        }
        if (num !== nextNum) {
            flag = false;
        }
    }
    if (flag) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(sum);
}
sameNum(2222222)