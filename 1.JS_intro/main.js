f = 50;
m = 70;
a = f / m;
document.write("<p>**************</p>");
document.write("Ускорение тела при силе F = " + f + ", " + "и массе m = " + m + " :");
// ИЛИ document.write(`Ускорение тела при силе F = ${f}, и массе m = ${m}:`);
document.write("<p>--------------------</p>");
document.write("a = " + a)
document.write("<p>--------------------</p>");
document.write("end.");

/* 2. Написать программу которая получит от 3ьох пользователя информацию
возраст, имя, фамилию.  Вывод выполнять в консоль (сonsole.log()).
 Програма должна быть реализована в 3 переменные.
*/

console.log("**************");
console.log("Список студентов зарегестрировавшихся на вебинар:");

userOne = prompt("Укажите возраст имя и фамилию", "18 лет Юрий Иванов" );
userTwo = prompt("Укажите возраст имя и фамилию", "16 лет Дмитрий Кузьмин" );
userThree = prompt("Укажите возраст имя и фамилию", "19 лет Оксана Петрова" );

console.log("1. " + userOne);
console.log("2. " + userTwo);
console.log("3. " + userThree);

console.log("-------------- " + "Средний возраст студента: " +
(parseInt(userOne) + parseInt(userTwo) + parseInt(userThree)) / 3 + " --------------");

console.log("**************");