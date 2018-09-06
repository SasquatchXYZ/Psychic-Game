// Creating Global variables to hold the number of Wins, Losses, Lives, an array to hold guessedLetters,
// the Computer's letter selection, and obviously the most important... an array singing the alphabet.
var wins = 0;
var losses = 0;
var lives = 9;
var guessedLetters = [];
var computerChoice;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables that hold the references to the location in the HTML where we want to display things.
var winsTally = document.getElementById("wins-tally");
var lossesTally = document.getElementById("losses-tally");
var guessesLeft = document.getElementById("guesses-left");
var userGuessLog = document.getElementById("userGuesses-log");

// FUNCTIONS
//======================================================================================================================
function gameStart() {
    winsTally.textContent = "Wins: " + wins;
    lossesTally.textContent = "Losses: " + losses;
    guessesLeft.textContent = "Guesses Remaining: " + lives;
    userGuessLog.textContent = "Guessed Letters: " + guessedLetters;
}

function gameReset() {
    lives = 9;
    guessedLetters = [];
    computerChoice = alphabet[Math.floor(Math.random() * 26)];
    console.log(computerChoice);
}

// MAIN PROCESS
//======================================================================================================================
gameReset();
gameStart();

document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();

    if (alphabet.indexOf(userGuess) >= 0) {
        if (userGuess === computerChoice) {
            wins++;
            alert("Correct!");
            gameReset();
        }
        else {
            lives--;
            guessedLetters.unshift(" " + userGuess.toUpperCase() + " ");
            console.log(guessedLetters);
        }
        if (lives === 0) {
            losses++;
            alert("No More Guesses... Try Again!");
            gameReset();
        }
        gameStart();
    }
    else {
        alert("That is not a letter... Psychics don't like tricksters...");
        gameReset();
        gameStart();
    }
};