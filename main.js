// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

function go (direction, mph) {
    console.log(`the car is moving ${direction}, at ${mph} mph.`);
    if (mph > 75) {
        console.log(`Slow down!!`);
    }
}

go("backwards", 85)




/// PART 2 ////

// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

//this can be rand with a forEach();
//

const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]

let bestYears = []

for (let i = 0; i < birthRates.length; i++) {
    let birthRatesLoop = birthRates[i]
    if (birthRatesLoop.birthRate > 15) {
        bestYears.push(birthRatesLoop.year)
    }

}

console.log(bestYears)