///////////////////////////////
//      HAMBURGER MENU       //
///////////////////////////////

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', animateHamburger);

function animateHamburger() {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
};



///////////////////////////////
//        DROPDOWN 1         //
///////////////////////////////

const dropdown =
    document.querySelector('.dropdown');
const dropdown_content =
    document.getElementById('dropdown_content');
const arrow =
    document.getElementById('arrow');


dropdown.addEventListener('click',
    animateDropdown);

function animateDropdown() {
    dropdown_content.classList.toggle('active');
    arrow.classList.toggle('turn');
};



///////////////////////////////
//        DROPDOWN 2         //
///////////////////////////////
const dropdown2 =
    document.querySelector('.dropdown2');
const dropdown_content2 =
    document.getElementById('dropdown_content2');
const arrow2 =
    document.getElementById('arrow2');


dropdown2.addEventListener('click',
    animateDropdown2);

function animateDropdown2() {
    dropdown_content2.classList.toggle('active');
    arrow2.classList.toggle('turn');
};



///////////////////////////////
//        DROPDOWN 3         //
///////////////////////////////

const dropdown3 =
    document.querySelector('.dropdown3');
const dropdown_content3 =
    document.getElementById('dropdown_content3');
const arrow3 =
    document.getElementById('arrow3');


dropdown3.addEventListener('click',
    animateDropdown3);

function animateDropdown3() {
    dropdown_content3.classList.toggle('active');
    arrow3.classList.toggle('turn');
};



///////////////////////////////
//        DROPDOWN 4         //
///////////////////////////////

const dropdown4 =
    document.querySelector('.dropdown4');
const dropdown_content4 =
    document.getElementById('dropdown_content4');
const arrow4 =
    document.getElementById('arrow4');


dropdown4.addEventListener('click',
    animateDropdown4);

function animateDropdown4() {
    dropdown_content4.classList.toggle('active');
    arrow4.classList.toggle('turn');
};
