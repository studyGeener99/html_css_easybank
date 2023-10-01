const menuBtn = document.querySelector('.menu__btn');

const menuMobile = document.querySelector('.menu__list');


menuBtn.addEventListener('click', ()=>{
    if(menuMobile.classList.contains('menu--open')){
        menuMobile.classList.remove('menu--open');
        menuMobile.classList.add('menu--close');
    }else{
        menuMobile.classList.add('menu--open');
        menuMobile.classList.remove('menu--close');
    }
    
});

function removeClassOnResize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth >= 720) {
        // Удаляем класс, если ширина экрана меньше или равна 600 пикселей
        menuMobile.classList.remove("menu--close");
        menuMobile.classList.remove('menu--open');
    }

}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", removeClassOnResize);
window.addEventListener("resize", removeClassOnResize);

