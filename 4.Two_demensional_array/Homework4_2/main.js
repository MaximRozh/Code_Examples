var mass = [1, 2, 3, 4, 5, 6, 7];
console.log("array before: " + mass);
var swap;


for (var i = 0; i < (mass.length - 1); i += 2) {
    swap = mass[i];
    mass[i] = mass[i + 1];
    mass[i + 1] = swap;
}
console.log("array after: " + mass);
