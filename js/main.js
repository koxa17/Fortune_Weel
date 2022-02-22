let menuBurgerBtn = document.querySelector('.burger__menu');
let menu = document.querySelector('.menu');
let closeMenuBtn = document.querySelector('.close-btn-menu');
let overlayMainSection = document.querySelector('.main').querySelector('.overlay-main');

function actionMenu() {
    menuBurgerBtn.classList.toggle('burger__menu-active');
    menu.classList.toggle('menu-open');
    overlayMainSection.classList.toggle('overlay-main-visible');
}


menuBurgerBtn.addEventListener('click', actionMenu)
closeMenuBtn.addEventListener('click', actionMenu)
overlayMainSection.addEventListener('click', actionMenu)


// Колесо
let canvasWheel = document.querySelector('#wheel');
if (canvasWheel) {
    // Крутим колесо
    let startBtn = document.querySelector('#start-btn')
    if (startBtn) {
        function spinningWheel() {
            return theWheel.startAnimation()
        }

        startBtn.addEventListener('click', spinningWheel)
    }

    let theWheel = new Winwheel({
            'canvasId': 'wheel',
            'responsive': true,
            'fillStyle': '#e7706f',
            'lineWidth': 1,
            'textFontSize': 16,
            'numSegments': 8,
            'outerRadius': 196,
            'segments':
                [
                    {'fillStyle': '#FAFD76', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#FAFD76'},
                    {'fillStyle': '#FFAB09', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#FFAB09'},
                    {'fillStyle': '#53C5DE', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#53C5DE'},
                    {'fillStyle': '#FB3695', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#FB3695'},
                    {'fillStyle': '#F9D32C', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#F9D32C'},
                    {'fillStyle': '#69D674', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#69D674'},
                    {'fillStyle': '#FF09F5', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#FF09F5'},
                    {'fillStyle': '#8C08F3', 'text': 'Name of 1st prize', 'textFontWeight': 600, 'strokeStyle': '#8C08F3'},
                ],
            'animation':
                {
                    'type': 'spinToStop',  // Type of animation.
                    'duration': 5,         // How long the animation is to take in seconds.
                    'spins': 8             // The number of complete 360 degree rotations the wheel is to do.
                }
        }
    );
}




//Для показа загрузки блоку main обаить класс load


// Модалка
let modal = document.querySelector('#modal')
if(modal) {
    const modalBottstrap = new bootstrap.Modal(modal);
    // Показать модалку, ниже функция и добавить класс open-modal к тегу body
    // modalBottstrap.show();
}


// Для визуала, потом удалить когда появится функционал
let segmentsItemsColorBlock = document.querySelectorAll('.segments__item-color')
const colors = ['#FAFD76', '#FFAB08', '#53C5DE', '#FB3695', '#F9D32C', '#69D674']
if (segmentsItemsColorBlock) {
    segmentsItemsColorBlock.forEach((item, i) => {
        item.style.background = colors[i]
    })
}


document.addEventListener("DOMContentLoaded", function () {

});


