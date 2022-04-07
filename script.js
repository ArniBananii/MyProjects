'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is no input
  if (!guess) {
    displayMessage('No Number');
    // when guess is correct
  } else if (guess === number) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'too High!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
