
// new CountdownTimer({ selector: '#timer-1', targetDate: new Date('Jul 17, 2019'),
// });

// Для подсчета значений используй следующие готовые формулы, где time - разница
// между targetDate и текущей датой.


const refs = {
  
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

let targetDate = new Date('Feb 2, 2022 23:57:00').getTime();

let countdown = setInterval(function() {

  let currentDate = new Date().getTime();
 
  let time = targetDate - currentDate;

const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
  

  if (time < 0) {
    clearInterval(countdown);
    refs.timer.insertAdjacentHTML('beforeend', 'This promotion is no longer available!');
  }
}, 1000);


function pad(value) {
  return String(value).padStart(2, '0');
};

function padDays(value) {
  return String(value).padStart(3, '0');
};

