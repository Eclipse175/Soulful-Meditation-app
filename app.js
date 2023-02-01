const menu = document.getElementById('menu');
const logo = document.querySelector('h1')
const navMenu = document.getElementById('navigation-menu')
const nav = document.querySelector('nav');
const cross = document.getElementById('close');

menu.addEventListener('click', function() {
    navMenu.style.width = '350px';
    navMenu.style.display = 'flex';
    //pushes content to the side
    nav.style.marginLeft = '350px'
})

cross.addEventListener('click', function() {
    navMenu.style.width = '0px';
    navMenu.style.display = 'none';
    //pushes content to the side
    nav.style.marginLeft = '0px'
})