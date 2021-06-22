
//Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
var n = +prompt("Введите чилсо");
var a = new Array(n);

var max = 50;
var min = 1;

for (var i = 0; i < a.length ; i++) {
    a[i] = Math.round( Math.random() * (max - min) + min );
}

//Найти максимальное число и минимальное число.
var maxV = a[0];
var minV = a[0];

var maxPos = 0;
var minPos = 0;

for ( var j = 0, maxV = a[0], minV = a[0]; j < a.length; j++) { 

    if (a[j] >= maxV) {
      maxV = a[j];
      maxPos = j;
  } 

    if (a[j] <= minV) {
        minV = a[j];
        minPos = j;
    }
}

console.log(a);
console.log("maxV", maxV);
console.log("minV", minV);

//Элементы массива между min -- max записать в массив B.
var b = new Array();

if (maxPos > minPos) {
    b = a.slice((minPos + 1), maxPos);
    console.log('Элементы массива между min -- max ', b);
} else if (minPos > maxPos) {
    b = a.slice((maxPos + 1), minPos);
    console.log('Элементы массива между max -- min ', b);
}


/* Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
Нельзя использовать стандартный метод reverse().
 Постарайтесь не использовать дополнительный массив.
 */

for (var c = 0, g = (a.length - 1); c < g; c++, g--) {
    var rev = a[g];
    a[g] = a[c];
    a[c] = rev
}

console.log('Reverse array A: ', a);