/* 
Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.

list.myPush(); list.myJoin(); list.myReverse();

Например: var list = [1, 2, 3];

function myPush() { ... }

list.myPush = myPush;

list.myPush();
// */

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function myPush (push) {
    this[this.length] = push;
}
// myPush.call(list, 5) 
list.myPush = myPush;

list.myPush('String');
console.log(list);

///////////////////////////////////////////////////////


function myJoin(between) {
    var str = '';

    for(var i = 0; i < this.length; i++) {
        str += (str ? between : '') + this[i];
    }

    return str
}

list.myJoin = myJoin;
console.log(list.myJoin('/'));


///////////////////////////////////////////////////////

function myReverse() {
    var rev;

    for(var i = 0; i < this.length / 2; i++) {
        rev = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = rev;
    }

    return this
}

list.myReverse = myReverse;
console.log(list.myReverse(list));


// list.myPush(); list.myJoin(); list.myReverse();

// Например: var list = [1, 2, 3];

// function myPush() { ... }

// list.myPush = myPush;

// list.myPush();