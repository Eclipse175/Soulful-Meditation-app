const menu = document.getElementById('menu');
const timerMiddle = document.getElementById('timer-middle');
const navMenu = document.getElementById('navigation-menu')
const nav = document.querySelector('nav');
const cross = document.getElementById('close');
const body = document.querySelector('body');
//button selectors below :
const studyMusic = document.getElementById('study')
const meditateMusic = document.getElementById('meditate')
const chillMusic = document.getElementById('chill')
const sadMusic = document.getElementById('sad-as-heck')

const studyVideo = document.getElementById('studyM');
const studyAudio = new Audio('studymoosic.mp3');

const chillVideo = document.getElementById('myVideo');
const chillAudio = new Audio('rainsound.mp3');

const sadVideo = document.getElementById('sad-hours');
const sadAudio = new Audio('sadsong.mp3');

const meditatingVideo = document.getElementById('medit');
const meditatingAudio = new Audio('medit.mp3');
const listItems = document.querySelectorAll('li');
const playAndPause = document.getElementById('play-pause');

menu.addEventListener('click', function () {
  navMenu.style.width = '350px';
  nav.style.marginLeft = '350px';
  navMenu.style.display = 'flex';
});

cross.addEventListener('click', function () {
  navMenu.style.width = '0px';
  //pushes content to the side
  nav.style.marginLeft = '0px';
  navMenu.style.display = 'none';
})

studyMusic.addEventListener('click', function () {
  studyVideo.play();
  studyAudio.play();
  studyVideo.style.display = 'block';

  chillVideo.pause()
  chillVideo.currentTime = 0;
  chillAudio.pause();
  chillAudio.currentTime = 0;
  chillVideo.style.display = 'none';

  sadVideo.pause()
  sadVideo.currentTime = 0;
  sadAudio.pause();
  sadAudio.currentTime = 0;
  sadVideo.style.display = 'none';

  meditatingVideo.pause();
  meditatingVideo.currentTime = 0;
  meditatingAudio.pause();
  meditatingAudio.currentTime = 0;
  meditatingVideo.style.display = 'none';
})

chillMusic.addEventListener('click', function () {

  chillVideo.play();
  chillAudio.play();
  chillVideo.style.display = 'block';

  studyVideo.pause()
  studyVideo.currentTime = 0;
  studyAudio.pause();
  studyAudio.currentTime = 0;
  studyVideo.style.display = 'none';

  sadVideo.pause()
  sadVideo.currentTime = 0;
  sadAudio.pause();
  sadAudio.currentTime = 0;
  sadVideo.style.display = 'none';


  meditatingVideo.pause();
  meditatingVideo.currentTime = 0;
  meditatingAudio.pause();
  meditatingAudio.currentTime = 0;
  meditatingVideo.style.display = 'none';
})

sadMusic.addEventListener('click', function () {
  sadVideo.play();
  sadAudio.play();
  sadVideo.style.display = 'block';

  studyVideo.pause()
  studyVideo.currentTime = 0;
  studyAudio.pause();
  studyAudio.currentTime = 0;
  studyVideo.style.display = 'none';

  chillVideo.pause()
  chillVideo.currentTime = 0;
  chillAudio.pause();
  chillAudio.currentTime = 0;
  chillVideo.style.display = 'none';


  meditatingVideo.pause();
  meditatingVideo.currentTime = 0;
  meditatingAudio.pause();
  meditatingAudio.currentTime = 0;
  meditatingVideo.style.display = 'none';
})

meditateMusic.addEventListener('click', function () {
  meditatingVideo.play();
  meditatingAudio.play();
  meditatingVideo.style.display = 'block';

  studyVideo.pause()
  studyVideo.currentTime = 0;
  studyAudio.pause();
  studyAudio.currentTime = 0;
  studyVideo.style.display = 'none';

  chillVideo.pause()
  chillVideo.currentTime = 0;
  chillAudio.pause();
  chillAudio.currentTime = 0;
  chillVideo.style.display = 'none';

  sadVideo.pause()
  sadVideo.currentTime = 0;
  sadAudio.pause();
  sadAudio.currentTime = 0;
  sadVideo.style.display = 'none';
})


// let time;
// const playAndPause = document.getElementById('play-pause');
// const playButton = document.getElementById('play');
// const pauseButton = document.getElementById('pause');

// const listItems = document.querySelectorAll('li');


// listItems.forEach(function (item) {
//   item.addEventListener('click', function () {
//     if (time) {
//       clearInterval(time); // Clear the previous timer if it exists
//     }

//     (function timer() {
//       let sec = 0;
//       time = setInterval(function () {
//         const minutes = Math.floor(sec / 60);
//         const seconds = sec % 60;
//         const formattedTime =
//           String(minutes).padStart(2, '0') +
//           ':' +
//           String(seconds).padStart(2, '0');
//         timerMiddle.style.display = 'flex';
//         timerMiddle.innerHTML = formattedTime;
//         playAndPause.style.display = 'flex';
//         sec++;
//       }, 1000);
//     })();
//   });
// });


// function play() {
//   playButton.style.display = 'none';
//   pauseButton.style.display = 'block';
// }

// function pause() {
//   pauseButton.style.display = 'none';
//   playButton.style.display = 'block';
//   clearTimeout(time);
//   time = null; // Reset the time variable
// }

// playButton.addEventListener('click', play);
// pauseButton.addEventListener('click', pause);

const timerIcon = document.getElementById('timer-link');

var watch = (function () {
  var parentTimer = document.getElementById('parent-timer-div')
  var timer = document.getElementById("timer-middle");
  var stop = document.getElementById("pause");
  var start = document.getElementById("play");
  var reset = document.getElementById("reset");
  var time = "00:00"
  var seconds = 0;
  var minutes = 0;
  var t;
  timer.textContent = time;

  timer.style.display = 'none';
  playAndPause.style.display = 'none';
  parentTimer.style.display = 'none';

  timerIcon.addEventListener('click', () => {
    if (timer.style.display === 'none') {
      parentTimer.style.display = 'flex';
      timer.style.display = 'flex';
      playAndPause.style.display = 'flex';
    } else {
      parentTimer.style.display = 'none';
      timer.style.display = 'none';
      playAndPause.style.display = 'none';
    }
  });


  function buildTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        seconds = 0;
      }
    }
    timer.textContent = (minutes < 10 ? "0" + minutes.toString() : minutes) + ":" + (seconds < 10 ? "0" + seconds.toString() : seconds);
  }
  function stopTimer() {
    stop.addEventListener("click", function () {
      clearTimeout(t);
    })
  }
  function startTimer() {
    start.addEventListener("click", function () {
      clearTimeout(t);
      t = setInterval(buildTimer, 1000);
    });
  }
  function resetTimer() {
    reset.addEventListener("click", function () {
      timer.textContent = time;
      seconds = 0; minutes = 0;
    });
  }
  return {
    start: startTimer(),
    stop: stopTimer(),
    reset: resetTimer()
  };
})()