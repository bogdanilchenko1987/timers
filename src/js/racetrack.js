const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];
let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(horse => run(horse)); // const promises = horses.map(run); те ж саме,передаємо колбек run

  updateProgressField('🤖 Race started, no bets');
  updateWinnerField('');

  determineWinnerHorse(promises);

  waitForAllHorses(promises);
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr>
  <td>${raceCounter}</td>
  <td>${horse}</td>
  <td>${time}</td>
  </tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function determineWinnerHorse(horsesPromises) {
  Promise.race(horsesPromises).then(({ horse, time }) => {
    updateWinnerField(`🎉 Winner ${horse} finished with time - ${time}`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAllHorses(horsesPromises) {
  Promise.all(horsesPromises).then(() =>
    updateProgressField('📝 Race finish, bets are open')
  );
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
