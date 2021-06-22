
// Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.

const input = document.querySelectorAll("input");
const textA = document.querySelector("textarea");


function getInput() {
    let str = '';
    
    if(textA.value != '') textA.value = '';
    
    for(let i = 0; i < this.length; i++) {
        if (this[i].value !== "")  {
            str += this[i].value + ',';
        }

        textA.value = str.slice(0, -1);
    }
}

setInterval(getInput.bind(input), 2000);








// такая запись(с аргументами) сделает функцию болле универсальной? и првильна ли она?
// function putNodeListTo(putTo) {
//     let str = '';
    
//     if(putTo.value != '') putTo.value = '';
    
//     for(let i = 0; i < this.length; i++) {
//         if (this[i].value !== "")  {
//             str += this[i].value + ',';
//         }

//         putTo.value = str.slice(0, -1);
//     }
// }

// setInterval(putNodeListTo.bind(input, textA), 2000);







