// Blueprint to create objects with some fielfs and methods

class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
};

const vehicle = new Vehicle('blue');
console.log(vehicle.color)

class Car extends Vehicle{
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom');
    }

    startDriving(): void {
        this.drive();
    }
}

// const car = new Car(4, 'red');
// car.startDriving();

