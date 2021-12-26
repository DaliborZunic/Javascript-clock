const hourFrame = document.getElementById('hourFrame');

const dayFrame = document.getElementById('dayFrame');

const minuteFrame = document.getElementById('minuteFrame');

const secondFrame = document.getElementById('secondFrame');

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

startClock();
setInterval(startClock, 1000);

function startClock() {
  let time = new Date();
  let day = time.getDay();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  
  dayFrame.innerHTML = weekday[day];
  hourFrame.innerHTML = hours;
  minuteFrame.innerHTML = minutes;
  secondFrame.innerHTML = seconds;
  
}
