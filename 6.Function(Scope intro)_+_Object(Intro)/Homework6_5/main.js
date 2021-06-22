
// Адаптировать функцию assignObjects() под неопределенное количество объектов.
//  assignObjects(obj1, obj2, ....., objn);

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
    let newObj = {}

    for ( i = 0; i < arguments.length; i++) {
        Object.assign(newObj, arguments[i]);
    }
    
    return newObj;
}

var result = assignObjects(objectFirst, objectSecond);
console.log(result);
