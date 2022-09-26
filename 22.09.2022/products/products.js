function products(input) {

    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let fruit = input[i];
        let calories = Number(input[i + 1]);

        result[fruit] = calories;

    }
    console.log(result);

}
products(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])