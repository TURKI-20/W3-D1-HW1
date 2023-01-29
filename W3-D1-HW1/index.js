"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function honk() {
    console.log("Interface Of Cars");
}
let JapanCar = {
    make: "TOYOTA",
    model: "AVALON , Touring",
    year: 2022,
    honk() {
        console.log(JapanCar);
    },
};
let GermanyCar = {
    make: "MERCEDES",
    model: "S500",
    year: 2018,
    honk() {
        console.log(GermanyCar);
    },
};
let EnglishCar = {
    make: "LAND-ROVER",
    model: "RANGE-ROVER,HSE",
    year: 2021,
    honk() {
        console.log(EnglishCar);
    },
};
let cars = [JapanCar, GermanyCar, EnglishCar];
for (let car of cars) {
    console.log(` Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, ${car.honk()}`);
}
honk();
for (let car of cars) {
    console.log(`Made in : ${car.year}`);
}
for (let car of cars) {
    console.log(`model is: ${car.make}`);
}
