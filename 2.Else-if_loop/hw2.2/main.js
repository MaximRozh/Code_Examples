do {
    num = prompt('Введите число', '');
    if (!(num > 0)) {
        alert("It is not a number. Try again");
    }
} while (!(num > 0));
alert(num + " это число. Умница!");
