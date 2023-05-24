const menuBtn = document.querySelector ('.menu__btn');
const  menu = document.querySelector ('.nav__items');


menuBtn.addEventListener ('click' , () => {
    menu.classList.toggle('nav__items--active');
});