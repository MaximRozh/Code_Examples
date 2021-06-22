// Cоздать конвертер-функцию которая получает на вход массив вида:
// mass = [ [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]] ];

// а на выходе получим переобразованый массив: [1 ,2, 3, 3.1, 4, 5, 6, 7, 8, 9, 10, 15]

mass = [ [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]] ];

function convert(arr) {
    var simpleArray = [];

    function alignArray(arr) {
        for (var i = 0; i < arr.length; i++) {

        if(Array.isArray(arr[i])){
          alignArray(arr[i]);
        } else {
          simpleArray.push(arr[i]);
        }
      }
    }    
    alignArray(arr);

    return simpleArray;
}

console.log(convert(mass));


// НУ И ТОЖЕ САМОЕ, ТОЛЬКО НА ЦИКЛАХ 
// mass = [ [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]] ];
//  console.log(mass)

// function convert(arr) {
//     var array = [];

//     for (var i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             for(var j = 0; j < arr[i].length; j++) {

//                 if(Array.isArray(arr[i][j])) {

//                     for(var y = 0; y < arr[i][j].length; y++) {
//                         if(Array.isArray(arr[i][j][y])) {
                           
//                             for(var z = 0; z < arr[i][j][y].length; z++) {
//                                 if(Array.isArray(arr[i][j][y][z])) {
//                                     continue
//                                 } else {
//                                     array.push(arr[i][j][y][z])
//                                 }
//                             }
//                         } else {
//                             array.push(arr[i][j][y])
//                         }
//                     }
//                 } else {
//                     array.push(arr[i][j])
//                 }
//             }
//         } else {
//             array.push(arr[i])
//         }
        
//     }

//     return array
// }

// console.log(convert(mass));
