const menu = document.getElementById('menu');
const logo = document.querySelector('h1')
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

menu.addEventListener('click', function () {
    navMenu.style.width = '350px';
    //pushes content to the side
    nav.style.marginLeft = '350px'
    navMenu.style.display = 'flex';
})

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

// make a timer and a listener to trigger that timer

let time;
const listItems = document.querySelectorAll('li')
listItems.forEach(function (item) {
    item.addEventListener('click', function () {
        (function timer() {
            var sec = 0;
            time = setInterval(function () {
                logo.innerHTML = '00:' + sec;
                sec++
            }, 1000)
        })()
    })
})


