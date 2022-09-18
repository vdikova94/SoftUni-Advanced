function commonDivisior(x, y) {
    let divisior = 0;
    for (let i = 0; i <= x && i <= y; i++) {
        if (x % i === 0 && y % i === 0) {
            divisior = i;
        }
    }
    console.log(divisior);
}
commonDivisior(15, 5)