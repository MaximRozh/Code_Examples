
// Написать функцию заполнения массива. Имя произвольное.

function arrayFill(arr, row) {
    for (var i = 0; i < row; i++) {
        arr[i] = Math.round(Math.random() * 50);
    }

    return arr;
}

var mass = [];
var size = 10;
console.log(arrayFill(mass, size));

// написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая - должен вернутся функцией.

var mass1 = [];
var mass2 = [];
var arrSize = 5

var array1 = arrayFill(mass1, arrSize);
var array2 = arrayFill(mass2, arrSize);

function countElem(countMass) {
    var sum = 0;
    
    for (var i = 0; i < countMass.length; i++) {
        sum += countMass[i];
    }
    return sum;
} 

function sumComparison(arr1, arr2) {
    var sum1 = countElem(arr1);
    var sum2 = countElem(arr2);

    (sum1 > sum2)? console.log("array 1 won, sum = ", sum1):
     console.log("array 2 won, sum = ", sum2); // это чтобы понять какой массив вернулся.
    
    return (sum1 > sum2)? arr1 : arr2;
}

var result = sumComparison(array1, array2);
console.log(result);

