'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const a = function (message) {
  document.querySelector('.a').textContent = message;
};


const displayMessag = function (message) {
  document.querySelector('.tot').textContent = message;
};


const displayMessa = function (message) {
  document.querySelector('.grade').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.ca').value);
    const exams = Number(document.querySelector('.exam').value);
    const tot = (guess + exams);
  
  if (!tot) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
    displayMessag(tot);

    // When player wins
  } else if (tot >= 80) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Exell');
    displayMessag(tot);
    displayMessa('A1');
  } else if (tot >= 70) {
    displayMessage('🎉 very Good');
    displayMessag(tot);
    displayMessa('B2');
  } else if (tot >= 50) {
    displayMessage('🎉 Good');
    displayMessa('B3');
    displayMessag(tot);
  } else if (tot >= 30) {
    displayMessage('🎉 Pass');
    displayMessag(tot);
    displayMessa('C4');
  } else if (tot >= 0) {
    displayMessage('🎉 File');
    displayMessag(tot);
    displayMessa('F9');
  } 
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
