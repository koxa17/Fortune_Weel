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


//Для показа загрузки блоку main добавить класс load


// Модалка
let modal = document.querySelector('#modal')
if (modal) {
    const modalBottstrap = new bootstrap.Modal(modal);
    // Показать модалку, ниже функция и добавить класс open-modal к тегу body
    modalBottstrap.show();
}


// Для визуала, потом удалить когда появится функционал
let segmentsItemsColorBlock = document.querySelectorAll('.segments__item-color')
const colors = ['#FAFD76', '#FFAB08', '#53C5DE', '#FB3695', '#F9D32C', '#69D674']
if (segmentsItemsColorBlock) {
    segmentsItemsColorBlock.forEach((item, i) => {
        item.style.background = colors[i]
    })
}

const addButton = document.querySelector('#add-btn');
const segmentsList = document.querySelector('.segments__list');
const segmentsData = [
    {
        id: 1,
        color: '#FAFD76'
    },
    {
        id: 2,
        color: '#FFAB08'
    },
    {
        id: 3,
        color: '#53C5DE'
    },
    {
        id: 4,
        color: '#FB3695'
    },
    {
        id: 5,
        color: '#F9D32C'
    },
    {
        id: 6,
        color: '#69D674'
    },
]

function createHtmlElement(id, color) {
    const li = document.createElement('li')
    li.className = 'segments__item'
    const div = document.createElement('div')
    div.className = 'segments__item-number'
    div.textContent = id

    if (color) {
        const divColorBlock = document.createElement('div')
        divColorBlock.className = 'segments__item-color'
        divColorBlock.style.backgroundColor = color
        div.append(divColorBlock)
    }
    const inputField = document.createElement('input')
    inputField.setAttribute('type', 'text')
    inputField.className = 'segments__item-text'
    inputField.placeholder = 'Title title title'

    li.append(div)
    li.append(inputField)
    return li
}

document.addEventListener("DOMContentLoaded", function () {
    segmentsData.forEach(item => {
        segmentsList.append(createHtmlElement(item.id, item.color))
    })
});

addButton.addEventListener('click', function () {
    const isAdmin = this.getAttribute('data-admin')
    const lastLiItem = segmentsList.getElementsByTagName('li')
    const lastId = lastLiItem[lastLiItem.length - 1].querySelector('.segments__item-number').textContent
    if(isAdmin) {
        segmentsList.append(createHtmlElement(Number(lastId) + 1, '#fff'));
    } else {
        segmentsList.append(createHtmlElement(Number(lastId) + 1));
    }



})