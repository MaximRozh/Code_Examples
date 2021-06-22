//1.1 Ораганизовать перебор чисел от 1 до 150. 1.2 Посчитать сумму всех чисел 1.3 Посчитать сумму чётных чисел
let counter = 0;
let evenNumber = 0;

for (let i = 1; i <= 150; i++) {
    console.log(i);
    counter += i;

    if (i % 2 == 0) {
        evenNumber += i;
    }
}

console.log("Cумму всех чисел : " + counter);
console.log("Cумму чётных чисел : " + evenNumber);