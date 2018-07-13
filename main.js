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