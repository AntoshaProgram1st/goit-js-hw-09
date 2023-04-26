const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function ColorMix() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.removeEventListener('click', ColorMix);
}
startButton.addEventListener('click', ColorMix);

function ColorMixStop() {
  clearInterval(intervalId);
  startButton.addEventListener('click', ColorMix);
  stopButton.removeEventListener('click', ColorMixStop);
}
stopButton.addEventListener('click', ColorMixStop);