'use strict';

const player1Ele = document.querySelector('.player--1');
const player0Ele = document.querySelector('.player--0');
const score0Ele = document.getElementById('score--0');
const score1Ele = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore1Ele = document.getElementById('current--0');
const currentScore2Ele = document.getElementById('current--1');

let currentPlayer, currentScore, score, playing;

const init = function () {
  currentScore = 0;
  currentPlayer = 0;
  score = [0, 0];
  playing = true;
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  diceEle.classList.add('hidden');
  currentScore1Ele.textContent = 0;
  currentScore2Ele.textContent = 0;
  player0Ele.classList.remove('player--winner');
  player1Ele.classList.remove('player--winner');
  player1Ele.classList.remove('player--active');
  player0Ele.classList.add('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
};

btnRollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      score[currentPlayer];

    if (score[currentPlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceEle.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);
