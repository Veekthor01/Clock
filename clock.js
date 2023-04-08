const hour = document.querySelector('#hr');
const minute = document.querySelector('#mn');
const second = document.querySelector('#sc');

setInterval( () => {
  let day = new Date();
  let hr = day.getHours();
  let min = day.getMinutes();
  let sec = day.getSeconds();

  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);