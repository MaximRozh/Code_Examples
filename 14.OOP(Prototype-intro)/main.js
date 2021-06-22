// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), 
// параметр obj которого имеет свойства X, Y, znak.
//  Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
//   Если - да, сделать математическое действие znak(которое описано в прототипе), 
//   иначе - запросить ввод новых данных через метод input() класса SuperMath. 
//   Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
//   При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
// p = new SuperMath(); p.check(obj); // --> no p.input() -> 3 prompt -> считает

const obj = {
    X: 12,
    Y: 3,
    znak: '/',
}

function SuperMath() {
    this.check = function(obj) {
    let answer = confirm(`Do you want to do operation: ${obj.X + obj.znak + obj.Y} ?`);
    
    if (answer) { 
        alert(`${obj.X + obj.znak + obj.Y} = ${this.mathOperation(obj.X, obj.Y, obj.znak )}`)
    } else {
        this.input(obj);
        this.check(obj);
        }
    }
}

SuperMath.prototype.input = function(obj) {
    const operations = ['+', '-', '/', '*', '%'];
    
    alert('Input a new data');
    do {
        obj.X = +prompt('Input value of X: ');
    } while (isNaN(obj.X))

    do {
        obj.Y = +prompt('Input value of Y: ');
    } while (isNaN(obj.Y))

    do {
        obj.znak = prompt('Input a sign of math operation for X and Y: ', '*')
    } while(operations.indexOf(obj.znak) == -1) //проверка на корректность ввода знака
}


SuperMath.prototype.mathOperation = function(X, Y, znak) {
    switch (znak) {
        case "+": 
        return X + Y;   
        case "-": 
        return X - Y;
        case "*": 
        return X * Y;
        case "/": 
        return X / Y;
        case "%": 
        return X % Y; 
    }
}

let p = new SuperMath();

p.check(obj);