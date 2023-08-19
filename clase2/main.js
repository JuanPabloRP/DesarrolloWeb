/*
***
2 arrows
1 callback
arreglo
 */

let array = [];

const agregarDatoFin = (arr, data) => arr.push(data);

const borrarDatoFin = (arr, data) => arr.pop(data);

const imprimirArray = (arr) => arr;

const modArray = (arr, operation, data = 0) => operation(arr, data);

console.log(modArray(array, agregarDatoFin, 5));
console.log(modArray(array, agregarDatoFin, 10));
console.log(modArray(array, agregarDatoFin, 3));

console.log(modArray(array, borrarDatoFin));

console.log(imprimirArray(array));

/*
  
//funcion normal
function restar(n1, n2) {
  return n1 - n2;
}

console.log(restar(5, 3));

//funcion anonima
const multi = function (n1, n2) {
  return n1 * n2;
};

console.log(multi(5, 3));

//arrow function con return explicito
const sumarCero = (n1, n2) => {
  return n1 + n2;
};

//arrow function return implicito dos paramatros
const sumar = (n1, n2) => n1 + n2;

//arrow function return implicito 1 paramatro

const sumarDos = (n1) => n1 + 0;

//arrow function return implicito sin parametros
const sumarTres = () => 0 + 0;

console.log(sumar(5, 3));

//callback function
const operacionesMatematicas = (num1, num2, operacion) => {
  return operacion(num1, num2);
};

console.log(operacionesMatematicas(5, 10, sumar));
console.log(operacionesMatematicas(5, 10, multi));


let userData = ["Juan", 1234, "@gmail.com"];

const userDataTwo = ["Juan", 1234, "@gmail.com"];

*/
