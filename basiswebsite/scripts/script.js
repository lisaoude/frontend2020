// JavaScript Document
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', animateHamburger);

function animateHamburger() {
    hamburger.classList.toggle('active');
};


const uitklap =
    document.querySelector('.uitklap');
uitklap.addEventListener('click', klapuit);

function klapuit() {
    uitklap.classList.toggle('active');
}
