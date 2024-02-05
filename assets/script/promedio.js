let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(`Muy bien ${userName}, vamos a sumar y promediar 5 numeros que nos indiques!`);

let num1 = +prompt('Ingresa el 1er Numero: ');
let num2 = +prompt("Ingresa el 2do Numero: ");
let num3 = +prompt("Ingresa el 3er Numero: ");
let num4 = +prompt("Ingresa el 4to Numero: ");
let num5 = +prompt("Ingresa el 5to Numero: ");

let suma = num1 + num2 + num3 + num4 + num5

let promedio = suma / 5

document.write(`Excelente, ${userName}, </br>
tus numeros fueron los siguientes: ${num1}, ${num2}, ${num3}, ${num4}, ${num5} </br>
La suma de todos ellos equivale a: ${suma}. </br>
Y el promedio es ${promedio}. `);
