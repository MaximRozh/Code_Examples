// Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
var res = factorial(7);
console.log(res);