/* 
Cоздать глобальную ф-ю greeting которая каждые 5000ms смотри в тег input с id='name' (получить при помощи document.querySelector('input[id="name"]'))
берет значение по ключу value и выводит сообщение преведствия из глобальной переменной greetingMessage.
alrt(greetingMessage + input.value)
*/

var input = document.querySelector('input[id="name"]');
var greetingMessage = 'Hello ';

function greeting (hello) {
      alert(hello + this.value);
}

setInterval(greeting.bind(input, greetingMessage), 5000);
