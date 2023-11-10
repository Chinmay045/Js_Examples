//Objects Literal
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
}

console.log(car);

function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topSpeed} than Mercedes`);
    }
}

car1 = new GeneralCar('Nisan', 180);
car2 = new GeneralCar("Maruti Alto", 80);
console.log(car1);
let c1 = car2.run();
console.log(c1);