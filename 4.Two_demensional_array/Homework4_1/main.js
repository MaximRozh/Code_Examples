var size = 10;
var mass = [];
mass.length = 5;

for(var row = 0; row < mass.length; row++) {
    mass[row] = [];
    mass[row].length = size;
  
    for(var column = 0; column < mass[row].length; column++) {
        mass[row][column] = Math.round(Math.random() * 50);
    }
}

console.log(mass);

var maxV;
var minV;

var maxPos;
var minPos;

for (var i = 0; i < size; i++) {
    for(var j = 0, sum = 0; j < mass.length; j++) {
        sum += mass[j][i]; 
    }
    console.log(i + ' column == ' + sum)

    if (i === 0) {
        maxV = sum;
        minV = sum;
    }
    
    if (sum >= maxV) {
        maxPos = i;
        maxV = sum;
    }
    
    if (sum <= minV) {
        minPos = i;
        minV = sum;
    }
}


console.log("Колонка с наименьшей суммой: " + maxPos + " (" + maxV + ")" + " |" + " Колонка с наибольшей суммой: " + minPos + " (" + minV + ")" );

