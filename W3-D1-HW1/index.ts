interface Car
{
    make: string,
    model: string,
    year: number,
    honk(): any,
}
function honk()
{
console.log("Interface Of Cars");
}

let JapanCar: Car = {
  make: "TOYOTA",
  model: "AVALON , Touring",
  year: 2022,

  honk(){
      console.log(JapanCar)
  },
}
let GermanyCar: Car = {
  make: "MERCEDES",
  model: "S500",
  year: 2018,

  honk(){
      console.log(GermanyCar)
  },
}
let EnglishCar: Car = {
  make: "LAND-ROVER",
  model: "RANGE-ROVER,HSE",
  year: 2021,

  honk(){
    console.log(EnglishCar)
    },
}

let cars : Car[] =[JapanCar,GermanyCar,EnglishCar]
    for (let car of cars)
     {
    console.log(` Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, ${car.honk()}`);
    }

honk()

for(let car of cars)
{
console.log(`Made in : ${car.year}`)
}

for(let car of cars)
{
console.log(`model is: ${car.make}`)
}

export{}