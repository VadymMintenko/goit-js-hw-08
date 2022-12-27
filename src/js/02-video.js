import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
// console.log(throttle);
// console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Подія
player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem('seconds', JSON.stringify(currentTime.seconds));
  }, 1000)
);
