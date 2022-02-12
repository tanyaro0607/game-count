const $start = document.querySelector('#start') //кнопка 'начало'
const $game = document.querySelector('#game') //поле для игры

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

let score = 0

//функция начало игры
function startGame() {
    $game.style.backgroundColor = '#fff' //смена цвета на белый
    $start.classList.add('hide') //скрыть кнопку

    renderBox() //создать квадрат
}

function handleBoxClick(event){
    //если элемент по клику содержит атрибут box
   if(event.target.dataset.box) {  
       score++ //увеличить счетчик элементов на 1
       renderBox() //сгенерировать квадрат
   }
}

//функция для создания квадратa
function renderBox() { 
    $game.innerHTML = '' //очистить поле
    let box = document.createElement('div') //сгененировать div

    //добавляем стили и атрибуды для квадрата
    box.style.height = box.style.width = '50px' 
    box.style.position = 'absolute' 
    box.style.backgroundColor = '#000'
    box.style.top = '50px'
    box.style.left = '70px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
 
    $game.insertAdjacentElement('afterbegin', box) //добавление элемента в dom-дерево
}

