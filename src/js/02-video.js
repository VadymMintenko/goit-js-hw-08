import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
// console.log(throttle);
// console.log(Player);
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
let currentTime = localStorage.getItem('videoplayer-current-time');

// Подія

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime.seconds)
    );
  }, 1000)
);
player.setCurrentTime(currentTime).then(function () {
  if (!currentTime) {
    return;
  }
});
