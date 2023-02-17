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
const Links = document.getElementsByTagName('li')

const studyVideo = document.getElementById('studyM');
const studyAudio = new Audio('studymoosic.mp3');

const chillVideo = document.getElementById('myVideo');
const chillAudio = new Audio('rainsound.mp3');

const sadVideo = document.getElementById('sad-hours');
const sadAudio = new Audio('sadsong.mp3');


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
    if (studyMusic.click = true) {
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
    }
})

chillMusic.addEventListener('click', function () {
    if (chillMusic.click = true) {

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
    }
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
})