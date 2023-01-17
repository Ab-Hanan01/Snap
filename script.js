const overlay = document.querySelector('.overlay')
const mobileNavBtn = document.querySelector('.nav__hamberger');
const navList = document.querySelector('.nav__list')
const navListItems = document.querySelectorAll('.nav__list__item');
const navListItemsB = document.querySelectorAll('.nav__list__item-a');
const downArrow = document.querySelectorAll('.down-arrow');
const upArrow = document.querySelectorAll('.up-arrow');

const toggleVisibility = function (element) {
    element.classList.toggle('hidden');
}
mobileNavBtn.addEventListener('click', () => {
    navList.classList.toggle("active");
    toggleVisibility(overlay);
})

navListItems[0].addEventListener('click', () => {
    toggleVisibility(upArrow[0]);
    toggleVisibility(downArrow[0]);
    navListItemsB[0].classList.toggle('expand');
})
navListItems[1].addEventListener('click', () => {
    toggleVisibility(upArrow[1]);
    toggleVisibility(downArrow[1]);
    navListItemsB[1].classList.toggle('expand');
})