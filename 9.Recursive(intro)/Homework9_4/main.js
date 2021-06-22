// "Попробывать" заполнить вот такой массив при помощи циклов: 
// new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));

var mass = new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));

function arrayFiller(arr) { 
    for(var i = 0; i < arr.length; i++) {

        for(var j = 0; j < arr[i].length; j++) {

            if (Array.isArray(arr[i][j])) {
                for(var y = 0; y < arr[i][j].length; y++) {
                    arr[i][j][y] = Math.round(Math.random() * 100);
                }
            } else {
                arr[i][j] = Math.round(Math.random() * 100);
            }
        
        }
    }
    return arr;
}

var res = arrayFiller(mass);
console.log(res);

