//Создать массив размерностью n, где n вводится с клавиатуры. 
//Заполнить случайными числами в диапазоне -220 ... 435.
// Вывести в документ числа, которые состоят из двух цифр.

var n = +prompt("Введите чилсо");
var a = new Array(n);

var maxA = 435;
var minA = -220;

for (var i = 0; i < a.length; i++) {
    a[i] = Math.round(Math.random() * (maxA - minA) + minA);

    if (a[i] <= 99 && a[i] >= -99 && !(a[i] <= 9 && a[i] >= -9)) {
        var num = a[i];
        console.log(num)
    }
}

console.log(a);