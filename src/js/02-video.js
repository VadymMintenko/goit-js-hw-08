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
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
