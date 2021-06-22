// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"


function cutElem (fraction, cut) {
	var arr = fraction.split("");

  for(var i = 0; i < arr.length ; i++) {
    var index = arr.indexOf(cut[i]);

        if (index !== -1 ){
            arr.splice(index, 1);
            i--;
        }
  }

  var str = arr.join("");
	return str;
}


console.log(cutElem("hello world", ["l", "d"]));






