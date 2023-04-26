// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
}; 
const picker = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const dayValue = document.querySelector('[data-days]');
const hourValue = document.querySelector('[data-hours]');
const minuteValue = document.querySelector('[data-minutes]');
const secondValue = document.querySelector('[data-seconds]');
const timerBlock = document.querySelector('.timer');
const numberBlocks = document.querySelectorAll('.field');
const valueBlocks = document.querySelectorAll('.value');

// Css block
timerBlock.style.display = 'flex';
timerBlock.style.gap = '5px';

numberBlocks.forEach((block) => {
  block.style.display = 'flex';
  block.style.flexDirection = 'column';
})
valueBlocks.forEach((block) => {
  block.style.textAlign = "center"
  block.style.fontSize = '30px';
})

flatpickr(picker, options);

let countIntervalId;

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

function timerCount() {
  const inputDate = new Date(picker.value);
  const currentDate = new Date();
  if (inputDate < currentDate) {
    Notiflix.Notify.warning(
      '"Please choose a date in the future'
    );
    clearInterval(countIntervalId);
    return
  }
  const timerDate = inputDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(timerDate);
    dayValue.textContent = days.toString().padStart(2, '0');
    hourValue.textContent = hours.toString().padStart(2, '0');
    minuteValue.textContent = minutes.toString().padStart(2, '0');
  secondValue.textContent = seconds.toString().padStart(2, '0');
  
  if (timerDate <= 0) {
    clearInterval(countIntervalId);
  }
  }
start.addEventListener('click', () => {
  countIntervalId = setInterval(() => {
    timerCount();
  }, 1000);
});