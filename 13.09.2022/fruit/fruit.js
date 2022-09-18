function fruit(fruit, fruitGrams, fruitPrice) {
    let fruitKilograms = fruitGrams / 1000;
    console.log(`I need $${(fruitPrice*fruitKilograms).toFixed(2)} to buy ${fruitKilograms.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)