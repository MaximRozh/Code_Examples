// В задачу п.2 добавить 3ий аргумента flag, который является boolean. 
// Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, 
// false - из второго.

// assignObjects({...}, {...}, false);

// В задачу п.3, сделать параметр flag не обязательный, 
// если параметр не передать - устанавливать значение false.

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

function assignObjects(obj1, obj2, flag = false) { // параметр по умолчанию false
    var newObj = {}
    
    for (var key in obj1) { 
        newObj[key] = obj1[key];
    }

    for (var key in obj2) { 

        if (flag && newObj[key]) {
             continue;
         }

       newObj[key] = obj2[key];
    }
    
    return newObj;
}

var result = assignObjects(objectFirst, objectSecond, true);
console.log(result);