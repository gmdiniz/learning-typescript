const carMakers = ['ford', 'toyota','chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['corolla'],
];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(199);

// help with `map`

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2040-10-10'];
importantDates.push('2023-10-10');
importantDates.push(new Date());

// arrays is used when we want to represent a collection of differente records