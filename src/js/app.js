import * as flsFunctions from "./modules/functions.js";

let menuIcon = document.querySelector('.icon-menu');
let header = document.querySelector('.header');

flsFunctions.isWebp();

menuIcon.addEventListener('click', () => {
    header.classList.toggle('_active');
    menuIcon.classList.toggle('_active');
});

