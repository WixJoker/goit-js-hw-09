import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const startButton = document.querySelector('button[data-start]');
startButton.addEventListener('click', startTimer);

const chosenDate = new Date();
const currentDate = new Date();
const delta = chosenDate - currentDate;

const daysLeft = document.querySelector('span[data-days]');
const hoursLeft = document.querySelector('span[data-hours]');
const minutesLeft = document.querySelector('span[data-minutes]');
const secondsLeft = document.querySelector('span[data-seconds]');

daysLeft.textContent = days;
hoursLeft.textContent = hours;
minutesLeft.textContent = minutes;
secondsLeft.textContent = seconds;

function startTimer() {
  selectedDates.forEach(() => {
    if (delta <= 0) {
      window.alert('Please choose a date in the future');
      startButton.disabled = 'true';
    }
    convertMs(ms);
  });
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
console.log(seconds);

function addLeadingZero(value) {
  value.padStart(2, '0');
}
