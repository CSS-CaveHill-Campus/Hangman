// Will put all items here for easy access
const playerHealthText = document.getElementById('healthCount');
const messageText = document.getElementById("messageText") // Can use this to give the player messages
const wordContainer = document.getElementById('wordContainer');
const letterGuessField = document.getElementById('letterGuess');
const guessButton = document.getElementById('guessButton');
const startButton = document.getElementById('startButton');
// const hintButton = document.getElementById('hintButton');

// Some variables for you

let current_word = "";
let health = 0;
let gameOver = true;

// Function for adding empty '____' (blank spaces) for each letter in the word
const createWordSpaces = (word) => {
    wordContainer.innerHTML = ""; // This will reset the word container
    for (let i = 0; i < word.length; i++){
        wordContainer.innerHTML += `<span id="letter-${i}">____</span>`
    }
}

// Function for modifying the guess count element
const setPlayerHealth = (newHealth) => {
    health = newHealth;
    playerHealthText.innerHTML = health;
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

// Function for checking if the player has won
const checkWin = () => {
    for (let i = 0; i < current_word.length; i++){
        let elem = document.getElementById(`letter-${i}`);
        if (elem.innerHTML == "____") return false;
    }
    return true;
}

// Functions for you to complete

// Start Game!
const startGame = () => {
    // Select a random word using the getRandomWord function. Assign it to the currentWord variable

    // Set the player's health to a number you please. HINT: Use the setPlayerHealth function
    
    // Create a '____' for each letter in the word. HINT: Use the createWordSpaces function

    // Use setMessage to tell the player to "Start Guessing"

    // Set the gameOver variable to False
}

// Make Guess
const guessLetter = () => {
    // Check to see if gameOver variable is True. If so, send a message to the player to "Start a new Game". Then return.

    // Get the guess value from the letterGuessField element. Hint: You can use .value on an input element to get it's value

    // See if that letter is in the chosen word! Hint: Try using a variable to store whether the letter was found or not
    
    // If it is, update the UI to have that letter in all the correct places.
    // Hint 1: You can use a loop for this!
    // Hint 2: Each span tag has an id that matches its index in the word. :)

    // If the letter is not in the word, then decrease the amount of health the player has by 1.

    // Check to see if the player is out of health.

    // If so, send a messaage to the player, telling them "Game Over!", then set the gameOver variable to true.
        
    // Check to see if the player found all the letters in the word! Hint: Use the checkWin function

    // If so, send a message to the player, telling them "You Win!", then set the gameOver variable to true.
}