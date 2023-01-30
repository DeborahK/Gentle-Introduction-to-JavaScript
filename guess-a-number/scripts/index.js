// Find the elements
const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess);

const guessInput = document.getElementById('guess-input');

const feedbackContainer = document.getElementById('feedback');
const playAgainContainer = document.getElementById('again-container');

const playAgainButton = document.getElementById('again-button');
playAgainButton.addEventListener('click', startGame);

// Start the game
let randomNumber;
startGame();

// Supporting functions
function startGame(){
  displayPlayAgain(false);

  if (feedbackContainer) {
    feedbackContainer.innerHTML = '';
  }
  if (guessInput) {
    guessInput.value = '';
  }
  randomNumber = generateRandomNumber(20);
}

function displayPlayAgain(display) {
  if (playAgainContainer) {
    if (display) {
      playAgainContainer.style.display = 'block';
    } else {
      playAgainContainer.style.display = 'none';
    }
  }
}

function generateRandomNumber(max) {
  const result = Math.floor(Math.random() * max) + 1;
  return result;
}

function processGuess() {
  let feedbackText;
  if (guessInput){
    const guess = guessInput.valueAsNumber;

    if (guess === randomNumber) {
      feedbackText = `${guess} is correct ... You win!`;
      displayPlayAgain(true);
    } else if (guess > randomNumber) {
      feedbackText = `${guess} is too high`;
    } else {
      feedbackText = `${guess} is too low`;
    }
  }
  if (feedbackContainer) {
    feedbackContainer.innerHTML += '<br>' + feedbackText;
  }
}
