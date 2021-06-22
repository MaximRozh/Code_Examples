// в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. 
// // Метод addRecord добавляет все свойства переданных объектов в data.

// data = {
//     addRecord: function(){},
//     p: 600,
//     str: 'hello',
//     y: -50
// }
// data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
// data.x // 50
// data.y // 20
// data.z // 30
// data.p // 600
// data.str // 'hello'

// В метод addRecord добавляется последний необязательный аргумент flag,
//  который указывает приоритет присвоения свойств с одинаковым названием.
//   Если true - берется свойство из первоначального объекта this, 
// если false - берется свойство из arguments. По умолчанию flag = false;



data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50
}

function addRecord() { 
    var flag = typeof arguments[arguments.length - 1] === 'boolean' ? true : false;

    for(var i = 0; i < arguments.length; i++){
        for(var key in arguments[i]){
            if (flag && this[key]){
            continue;
             }
        this[key] = arguments[i][key];
        }
    }
}


data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
console.log(data.x) // 50
console.log(data.y) // 20
console.log(data.z) // 30
console.log(data.p) // 600
console.log(data.str) // 'hello' 