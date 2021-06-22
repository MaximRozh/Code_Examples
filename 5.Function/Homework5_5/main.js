// напиши функцию filter, которая принимает функцию-предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.

//  var input = [1, 2, 3, 4, 5, 6];
//  function isEven(x) { return x % 2 == 0; } // проверяет на четность
//  console.log(filter(input, isEven)); // [2, 4, 6]

var input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return (x % 2 == 0)? true : false;
}

function filter(mass, predicat) {
    var newMass = [];

    for (var i = 0; i < mass.length; i++) {

        if (predicat(mass[i])) {
            newMass.push(mass[i]);
        }
    }

    return newMass;
}
console.log(filter(input, isEven));





// аналогично
// var input = [1, 2, 3, 4, 5, 6];
// function filter(mass) {
//     return mass.filter((item)=> {
//         return item % 2 == 0 
//        })
//     }
// console.log(filter(input));