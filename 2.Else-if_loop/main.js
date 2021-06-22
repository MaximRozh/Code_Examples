var userName = prompt("Кто пришел?", "Админ");

if (userName == "Админ") {
    var adminPass = prompt("Пароль?", "Черный Властелин");

    if (adminPass == "Черный Властелин") {
        alert("Добро пожаловать!");
    } else if (adminPass == null) {
        alert("Выход отменен")
    } else {
        alert("Пароль неверен")
    }
} else if (userName == null) {
    alert("Вход отменен");
} else {
    alert("Я вас не знаю");
}