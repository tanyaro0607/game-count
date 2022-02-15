const $start = document.querySelector('#start') //кнопка 'начало'
const $game = document.querySelector('#game') //поле для игры
const $time = document.querySelector('#time') //счетчик времени

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

let score = 0
let isGameStarted = false

//функция начало игры
function startGame() {
    isGameStarted = true
    $game.style.backgroundColor = '#fff' //смена цвета на белый
    $start.classList.add('hide') //скрыть кнопку

    let interval = setInterval(function() {
        let time = parseFloat($time.textContent)
        if (time <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox() //создать квадрат
}

function endGame() {
    isGameStarted = false
}

function handleBoxClick(event){
    //если игра не запущена / закончилась
    if (!isGameStarted) {
        return //ф-я не выполняется
    }
    //если элемент по клику содержит атрибут box
   if (event.target.dataset.box) {  
       score++ //увеличить счетчик элементов на 1
       renderBox() //сгенерировать квадрат
   }
}

//функция для создания квадратa
function renderBox() { 
    $game.innerHTML = '' //очистить поле
    let box = document.createElement('div') //сгененировать div
    let boxSize = getRandom(30, 100)
    let gameSize = $game.getBoundingClientRect() //величина поля
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    //добавляем стили и атрибуды для квадрата
    box.style.height = box.style.width = boxSize + 'px' 
    box.style.position = 'absolute' 
    box.style.backgroundColor = '#000'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) +'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
 
    $game.insertAdjacentElement('afterbegin', box) //добавление элемента в dom-дерево
}

//ф-я для генерации рандомного числа
function getRandom(min, max) {
    return Math.floor(Math.random() *(max - min) + min)
}

