// Will put all items here for easy access
const playerHealthText = document.getElementById('healthCount');
const messageText = document.getElementById("messageText") // Can use this to give the player messages
const wordContainer = document.getElementById('wordContainer');
const inputContainer = document.getElementById('inputContainer');
const letterGuessField = document.getElementById('letterGuess');
const guessButton = document.getElementById('guessButton');
const startButton = document.getElementById('startButton');
const buttonsContainer = document.getElementById('buttonsContainer');
// const hintButton = document.getElementById('hintButton');

// Some variables for you

let current_word = "";
let health = 0;
let gameOver = true;

// Function for adding empty '____' (blank spaces) for each letter in the word
const createWord = (word) => {
    for (let i = 0; i < word.length; i++){
        wordContainer.innerHTML += `<span id="letter-${i}">____</span>`
    }
}

// Function for modifying the guess count element
const setPlayerHealth = (newHealth) => {
    health = newHealth;
    playerHealthText.innerHTML = guesses;
}

// Function for sending the player a message
const setMessage = (text) => {
    messageText.innerHTML = text;
}

// Function for getting a random word
const getRandomWord = () => {
    // Will use the random number to select a word from the list of words
    
    let chosenRandomNumber = Math.floor(Math.random() * words.length);
    let chosenWord = words[chosenRandomNumber];
    return chosenWord;
}

// Functions for you to complete

// Start Game!
const startGame = () => {
    // Select a random word using the getRandomWord function

    // Set the player's health to a number you please. HINT: Use the setPlayerHealth function
    
    // Create a '____' for each letter in the word.

    // Use setMessage to tell the player to "Start Guessing"

    // Set the gameOver variable to False
}

// Make Guess
const guessLetter = () => {
    // Check to see if gameOver variable is True. If so, send a message to the player to "Start a new Game". Then return.
    // Get the guess value from the letterGuessField element.

    // See if that letter is in the chosen word!

    // If it is, update the UI to have that letter in all the correct places.
    // Hint 1: You can use a loop for this!
    // Hint 2: Each span tag has an id that matches its index in the word. :)

    // If the letter is not in the word, then decrease the amount of health the player has by 1.

    // Check to see if the player is out of health.

    // If so, send a messaage to the player, telling them "Game Over!", then set the gameOver variable to true.

    // Check to see if the player found all the letters in the word!

    // If so, send a message to the player, telling them "You Win!", then set the gameOver variable to true.
}