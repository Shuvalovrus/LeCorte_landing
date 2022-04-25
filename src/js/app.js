import * as flsFunctions from "./modules/functions.js";

let menuIcon = document.querySelector('.icon-menu');
let header = document.querySelector('.header');
let body = document.querySelector('body');



flsFunctions.isWebp();

menuIcon.addEventListener('click', () => {
    body.classList.toggle('no-scroll')
    header.classList.toggle('_active');
    menuIcon.classList.toggle('_active');
    menuIcon.preventDefault()
});

