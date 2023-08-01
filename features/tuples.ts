// multiple attributes to represent a single thing
// drink = {
//     color: ...,
//     carbonated: ...,
//     sugar: ...
// }

const drink = {
    color: 'brown',
    carbonated: true,
    suger: 40
};

type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3355];

const carStats = {
    horseP: 400,
    weight: 3354
};

