function heroes(input) {
    let heroData = [];

    for (let hero of input) {

        let heroArr = hero.split(' / ');
        let [name, level, items] = heroArr;
        level = Number(level);

        if (items === undefined) {
            items = [];
        } else {
            items = items.split(', ');
        }

        heroData.push({ name, level, items })
    }
    console.log(JSON.stringify(heroData));

}
heroes(
    ['Isacc / 25',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ])