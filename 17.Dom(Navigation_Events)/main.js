// Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).
// Изменяя состояние range меняется состояние поля ввода number. И наоборот.

// Реализовать блок-диаграмму, который в пикселях будет отображать значение range. 
// Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.
// Красный блок - количество комиссии. Комиссия вычисляется по формуле:

// (range < 20) -> 2%
// (20 - 50)  -> 4%
// (50 - 75)  -> 6%
// (75 - 100)  -> 8%
// Красный блок отображает количество комиссии.
// Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. 



let range = document.querySelector('[type ="range"');
let number = document.querySelector('[type ="number"')
let diagramm = document.querySelector('.diagramm');
let block = diagramm.lastElementChild //diagramm.children[1]
let comission = diagramm.firstElementChild

range.onmousedown = function() {
    this.oninput = move;
}

number.onclick = function () {
    range.value = this.value;
    rangeDiagramm(range.value, block);
    taxDiagramm(range.value, comission);
}
function move() {
    number.value = this.value;
    rangeDiagramm(number.value, block);
    taxDiagramm(number.value, comission)
}

function rangeDiagramm(value, element) {
    element.style.height = value + '%'
}

const interestRate = {
    two: 2,
    four: 4, 
    six: 6,
    eight: 8
}

function taxDiagramm(value, elem) {

    getHeight(0, 20, interestRate.two)
    getHeight(20, 50, interestRate.four);
    getHeight(50, 75, interestRate.six);
    getHeight(75, 100, interestRate.eight);

    if (value == 0) {
        elem.style.height = 0 + '%'
    }

    function getHeight(from, to, taxHeight) {
        if(value > from && value <= to) {
            elem.style.height = taxHeight + "%"
        }
    } 
}
