function cookingNumbers(...input) {
    let number = Number(input.shift());

    let parser = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => (x * 0.8).toFixed(1),
    }

    for (const command of input) {
        number = parser[command](number);
        console.log(number);
    }

}
cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');

console.log('........................');

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')