'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number!!!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '💥 Correct Number!!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? '📈 Number is Lower' : '📉 Number is Higher';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game 😭';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
