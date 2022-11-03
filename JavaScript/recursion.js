const factorial = (n) => {
    if (n <=1) return n;
    return n * factorial (n - 1);
}
// console.log(factorial(10));


// Métodos de Arrays

const username = ["lalitoOwo", "CaptMagma003", "Zabdielxiitho0", "DanMen"];

// Método pop();
// username.pop();
// console.log(username);

// // Método push();
// username.push("DanMen");
// console.log(username);

// // Método shift();
// username.shift();
// console.log(username);

// //Método unshift();
// username.unshift("lalitoOwo");
// console.log(username);


// Splice();
// Se definen 3 parametros
// 1o. Lugar a modificar
// 2o. Elementos a eliminar
// 3o en adelante -> Elmentos a agregar (opcional)
const weekdays = ["Lunes", "Miércoles", "Jueves", "Viernes"]
weekdays.splice(1, 0, "Martes")
// console.log(weekdays);

//Slice();
//Ayuda a añadir, actualizar, y eliminar elementos de un array respetando el array original

const carrito = ["Almendras", "Leche coco", "Coca-cola", "Chocolate", "Sandia", "Kfcito", "Tejocotes", "Queso de cabra", "Aguacates"];
const carrito2 = carrito.slice(2);
// console.log(carrito2);

const carrito3 = carrito.slice(2,6);
// console.log("Pago distinto: " + carrito3.toString);

//Sort();
// console.log(carrito.sort());
// console.log(carrito.sort((a,b) => a > b ? -1 : 1));

//forEach();
carrito.forEach(e => console.log(e));







