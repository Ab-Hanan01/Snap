const overlay = document.querySelector('.overlay')
const navBtn = document.querySelector('.nav__icon');
const closeNavBtn = document.querySelector('.nav__icon__close');
const openNavBtn = document.querySelector('.nav__icon__open');
const navList = document.querySelector('.nav__list')
const navListItems = document.querySelectorAll('.nav__list__item');
const navListItemsB = document.querySelectorAll('.nav__list__item-a');
const downArrow = document.querySelectorAll('.down-arrow');
const upArrow = document.querySelectorAll('.up-arrow');

const toggleVisibility = function (element) {
    element.classList.toggle('hidden');
}
navBtn.addEventListener('click', () => {
    navList.classList.toggle("active");
    toggleVisibility(overlay);
    toggleVisibility(openNavBtn);
    toggleVisibility(closeNavBtn);
    navListItemsB[0].classList.remove('expand');
    navListItemsB[1].classList.remove('expand');
    upArrow.forEach((img) => {
        img.classList.add("hidden")
    })
    downArrow.forEach((img) => {
        img.classList.remove("hidden")
    })
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