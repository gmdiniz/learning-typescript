// interface Vehicle {
//     name?: string;
//     year?: Date;
//     broken?: boolean;
//     summary(): string;
// };

interface Reportable {
    summary(): string;
};

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${ this.name }`;
    }
};

const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);

// General strategy for reusable code in ts
// create functions that accept arguments that are typed with interfaces
// objects/classes can decide to `implement` a given interface to work with a function