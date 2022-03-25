const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const StartPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 76;
const WIDTH = 9;

function moveFrog(e) {
  squares[currentIndex].classList.remove('frog');

  switch(e.key) {
    case 'ArrowLeft':
      if (currentIndex % WIDTH !== 0) currentIndex -= 1;
      break;
    case 'ArrowRight':
      if (currentIndex % WIDTH < WIDTH - 1) currentIndex += 1;
      break;
    case 'ArrowUp':
      if (currentIndex - WIDTH >= 0) currentIndex -= WIDTH;
      break;
    case 'ArrowDown':
      if (currentIndex + WIDTH < WIDTH * WIDTH) currentIndex += WIDTH;
      break;
  }

  squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog);