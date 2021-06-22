// 1)Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(),
//  которая описана в window. При вызове метода obj.renderObject() -> 
//  выводит в document всё содержимое объекта, кроме самого метода renderObject

//     obj => { x:10, y: 20 }
//     obj.renderObject() -> x:10, y: 20

obj = {
    x: 10,
    y: 20,
    renderObject: renderObject,
    showRender: function() {} //как пример
}

function renderObject() {
    document.write('<ul>');

    for(var key in this) {
        if ( this[key] != obj.renderObject) { //кроме самого метода renderObject
            document.write('<li>' + key + ' = ' + this[key]);
        }
    }

    document.write('</ul>');
}

obj.renderObject();
