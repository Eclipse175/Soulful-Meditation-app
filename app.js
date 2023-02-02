const menu = document.getElementById('menu');
const logo = document.querySelector('h1')
const navMenu = document.getElementById('navigation-menu')
const nav = document.querySelector('nav');
const cross = document.getElementById('close');

const chillVideo = document.getElementById('myVideo');
const studyVideo = document.getElementById('studyM');


const chillAudio = new Audio('rainsound.mp3');
const studyAudio = new Audio('studymoosic.mp3');

const body = document.querySelector('body');
const timerButtons = document.getElementById('timer');
//button selectors below :
const studyMusic = document.getElementById('study');
const meditateMusic = document.getElementById('meditate')
const chillMusic = document.getElementById('chill')
const sadMusic = document.getElementById('sad-hours')
const Links = document.querySelectorAll('li')


menu.addEventListener('click', function () {
    navMenu.style.width = '350px';
    navMenu.style.display = 'flex';
    //pushes content to the side
    nav.style.marginLeft = '350px'
})

cross.addEventListener('click', function () {
    navMenu.style.width = '0px';
    navMenu.style.display = 'none';
    //pushes content to the side
    nav.style.marginLeft = '0px'
})

chillMusic.addEventListener('click', function () {
    chillVideo.style.display = 'block';
    chillAudio.play();
    timerButtons.style.display = 'flex';
})

studyMusic.addEventListener('click', function () {
    studyAudio.play();
    studyVideo.style.display = 'block';
    timerButtons.style.display = 'flex';
})

