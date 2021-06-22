// Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции
// row (5) // 5 4 3 2 1

function row(number) {
    if(number == 0) {
        return;
    }

    console.log(number);
    row(number - 1);
}

row(5);