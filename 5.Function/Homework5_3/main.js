// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
//В переменной знак может быть: +, -, *, /, %, ^. 
// Вывести результат математического действия, указанного в переменной znak.

function doMath(x, znak, y) {

    switch (znak) {
        case "+": 
        result = x + y;   
        break;
        case "-": 
        result = x - y;
        break;
        case "*": 
        result = x * y;
        break;
        case "/": 
        result = x / y;
        break;
        case "%": 
        result = x % y; 
        break;
        case "^": 
        result = x ^ y; 
        break;
        default:
        alert("Операция невозможна");
        break;
    }

    return result;
  }
  
  var first = +prompt('Значение 1');
  var operation = prompt('оператор');
  var second = +prompt('Значение 2');

alert(doMath(first, operation, second));
