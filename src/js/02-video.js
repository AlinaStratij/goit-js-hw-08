
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY='videoplayer-current-time';

function onTimeUpDate(date) {
    const storageDate = localStorage.setItem(STORAGE_KEY, date.seconds));
    console.log(storageDate);
}


const saveTime = Math.round(localStorage.getItem(STORAGE_KEY));
console.log(saveTime);
if (saveTime) {
  player.setCurrentTime(saveTime);
}
player.on('timeupdate', throttle(onTimeUpDate, 1000));
