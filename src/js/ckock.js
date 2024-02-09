// popup Ad

// ------------------------------------

// const box = document.querySelector('.js-box');
// const titleTimer = document.querySelector('.js-timer');
// let counter = 11;
// setTimeout(() => {
//   box.style.display = 'block';

//   const id = setInterval(() => {
//     counter -= 1;
//     titleTimer.textContent = counter;

//     if (!counter) {
//       //!counter counter === 0
//       clearInterval(id);
//       titleTimer.textContent = 'X';
//       titleTimer.addEventListener('click', onClick);
//       // box.style.display = "none";
//     }
//   }, 1000);
// }, 5000);

// function onClick() {
//   box.style.display = 'none';
// }

// ----------------------------

// CLOCK

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
];

const refs = {
  day: document.querySelector('.date-day'),
  month: document.querySelector('.date-month'),
  year: document.querySelector('.date-year'),
  date: document.querySelector('.date'),
  digitalClock: document.querySelector('.digital-clock'),
  arrowSecs: document.querySelector('.clock-seconds__arrow'),
  arrowMins: document.querySelector('.clock-minutes__arrow'),
  arrowHours: document.querySelector('.clock-hours__arrow'),
};

setInterval(() => {
  // for date
  const currentTime = new Date();
  const currentDay = arrDay[currentTime.getDay()];
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentDate = currentTime.getDate();
  // for digital time
  const currentHour = currentTime.getHours();
  const currentMins = currentTime.getMinutes();
  const currentSecs = currentTime.getSeconds();
  const formatTime = `${currentHour.toString().padStart(2, '0')} : ${currentMins
    .toString()
    .padStart(2, '0')} : ${currentSecs.toString().padStart(2, '0')}`;

  // for clock time
  const changeSecks = (360 / 60) * currentSecs;
  const changeMins = (360 / 60) * currentMins;
  const changeHours = (360 / 12) * currentHour + (360 / 12 / 60) * currentMins;

  // drawing date & time
  refs.day.textContent = currentDay;
  refs.month.textContent = currentMonth;
  refs.year.textContent = currentYear;
  refs.date.textContent = currentDate;
  refs.digitalClock.textContent = `Current Time : ${formatTime}`;
  refs.arrowSecs.style.transform = `rotate(${changeSecks}deg)`;
  refs.arrowMins.style.transform = `rotate(${changeMins}deg)`;
  refs.arrowHours.style.transform = `rotate(${changeHours}deg)`;
}, 1000);
