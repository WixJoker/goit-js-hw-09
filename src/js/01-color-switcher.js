const buttonStartRef = document.querySelector('button[data-start]');
const buttonStopRef = document.querySelector('button[data-stop]');

let timerId = null;

buttonStartRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (timerId) {
    buttonStartRef.disabled = 'true';
  }
});

buttonStopRef.addEventListener('click', () => {
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
