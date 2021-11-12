let randLoc = Math.floor(Math.random() * 5)
let location1 = randLoc
let location2 = randLoc + 1
let location3 = randLoc + 2
let guess
let hits = 0
let guesses = 0
let isSunk = false
let usedGuess = []

while (isSunk == false) {
    guess = prompt("Ready, aim, fire!  (enter a number fro 0-6:")
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    }
    else if (usedGuess.includes(guess)) {
        alert("already used!  guess again!"))
    }
    usedGuess.push(guess)
    else {
        guesses += 1
    }
        if (guess == location1 || guess == location2 || guess == location3) {
                hits += 1
                alert("hit!")
        }
        else {
            alert("miss!")
        }
        if (hits == 3) {
                isSunk = true
                alert("You sank my battleship!")
        }
}

let stats = "You took " + guesses + " guesses to sink the battleship.  That means your accuracy is " + (3/guesses) + "."
alert(stats)