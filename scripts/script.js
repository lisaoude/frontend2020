// JavaScript Document
const hamburger = document.querySelector('.hamburger');
const line = document.querySelector('.line');
const navigation = document.querySelector('.navigation');


hamburger.addEventListener('click', animateHamburger);

function animateHamburger() {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
};


console.log('dit werkt');
