import * as flsFunctions from "./modules/functions.js";

let menuIcon = document.querySelector('.icon-menu');

flsFunctions.isWebp();

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('_active');
});

