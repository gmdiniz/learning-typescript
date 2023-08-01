const add = (a: number, b: number) => {
     return a + b;
};

// quando inferir a tipagem na declaracao ou na execucao da funcao

const subtract = (a: number, b: number): number => {
    return a-b
};

function divide(a: number, b: number): number {
    return a / b;
};
 

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    return undefined;
}

const throwError = (message: string): never => {
    throw new Error(message);
    // apenas usar never quando esperamos estritamente que a funcao nunca terminara
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

// ES2015
// const logweather =({ date, weather }) => {
//     console.log(date);
//     console.log(weather);
// }

logWeather(forecast);

 