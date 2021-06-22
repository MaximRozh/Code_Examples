// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый,
// который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта

var objectFirst = {
    a: "hello",
    b: 20,
    c: 30,
    t: 10
}

var objectSecond = {
    a: "bye",
    e: 20,
    t: 55
}

function assignObjects(obj1, obj2) {
    var newObj = {}
    // Object.assign(newObj, obj1, obj2);
        
    for (var key in obj1) { 
        newObj[key] = obj1[key];
    }

    for (var key in obj2) { 
       newObj[key] = obj2[key];
    }

    return newObj;
}

var result = assignObjects(objectFirst, objectSecond);
console.log(result);

