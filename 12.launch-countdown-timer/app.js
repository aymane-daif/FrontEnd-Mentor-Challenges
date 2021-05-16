const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdown = document.querySelectorAll(".countdown-container .countdown");

let days = 13;
let hours = 23;
let minutes = 59;
let seconds = 59;

let maxDays = 13;
let maxHours = 23;
let maxMinutes = 59;
let maxSeconds = 59;

setInterval(updateCount, 1000);

function updateCount() {
  days = Number(daysEl.textContent);
  hours = Number(hoursEl.textContent);
  minutes = Number(minutesEl.textContent);
  seconds = Number(secondsEl.textContent);
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    //Reset the countdown
    daysEl.textContent = 13;
    hoursEl.textContent = 23;
    minutesEl.textContent = 59;
    secondsEl.textContent = 59;
    maxDays = 13;
    maxHours = 23;
    maxMinutes = 59;
    maxSeconds = 59;
  } else if (
    days <= maxDays &&
    hours <= maxHours &&
    minutes <= maxMinutes &&
    maxSeconds > 0
  ) {
    //show overlay
    showOverlay(3);
    //update seconds
    maxSeconds--;
    secondsEl.textContent = maxSeconds.toString().padStart(2, "0");
  } else if (
    days <= maxDays &&
    hours <= maxHours &&
    maxMinutes > 0 &&
    maxSeconds === 0
  ) {
    //show overlay
    showOverlay(2);
    //update minutes
    maxSeconds = 59;
    maxMinutes--;
    minutesEl.textContent = maxMinutes.toString().padStart(2, "0");
  } else if (
    days <= maxDays &&
    hours > 0 &&
    maxMinutes === 0 &&
    maxSeconds === 0
  ) {
    //show overlay
    showOverlay(1);
    //update hours
    maxMinutes = 59;
    maxSeconds = 59;
    maxHours--;
    hoursEl.textContent = maxHours.toString().padStart(2, "0");
  } else if (days > 0 && hours === 0 && maxMinutes === 0 && maxSeconds === 0) {
    //show overlay
    showOverlay(0);
    //update days
    maxHours = 23;
    maxMinutes = 59;
    maxSeconds = 59;
    maxDays--;
    daysEl.textContent = maxDays.toString().padStart(2, "0");
  }
}

function showOverlay(index) {
  countdown.forEach((count, idx) => {
    count.style.setProperty("--show", "hidden");
    if (idx === index) count.style.setProperty("--show", "visible");
  });
}
