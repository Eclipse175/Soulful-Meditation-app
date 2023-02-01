const menu = document.getElementById('menu');
const logo = document.querySelector('h1')
const navMenu = document.getElementById('navigation-menu')
const nav = document.querySelector('nav');
const cross = document.getElementById('close');
const video = document.querySelector('video');
const audio = new Audio('rainsound.mp3');


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
    video.style.display = 'block';
    audio.play();
    cross.clicked();
})