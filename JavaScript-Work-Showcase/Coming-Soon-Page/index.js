/*================= newsLetter-toggle ===================*/
const notifyBtn = document.querySelector('.notifyBtn');
const closeBtn = document.querySelector('.close');

const toggle = () => {
  let newsLetter = document.querySelector('.newsLetter');

  newsLetter.classList.toggle('active');
};

notifyBtn.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);

/*================= Count-Down ===================*/
const countDate = new Date(Date.UTC(2023, 11, 13, 19, 24, 35)).getTime();

const updateTime = () => {
  let now = new Date().getTime(),
    gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 3;

  let days = Math.floor(gap / day);
  let hours = Math.floor((gap % day) / hour);
  let minutes = Math.floor((gap % hour) / minute);
  let seconds = Math.floor((gap % minute) / second);

  document.getElementById('day').innerHTML = days;
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minutes;
  document.getElementById('second').innerHTML = seconds;
};

setInterval(updateTime, 1000);
