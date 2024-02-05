// SALUDO Y PRESENTACION DEL PROGRAMA AL USER

let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(
  `Muy bien ${userName}, vamos a sumar y promediar 5 numeros que nos indiques!`
);

//PEDIMOS INGRESAR LOS 5 NUMEROS
let num1 = +prompt("Ingresa el 1er Numero: ");
let num2 = +prompt("Ingresa el 2do Numero: ");
let num3 = +prompt("Ingresa el 3er Numero: ");
let num4 = +prompt("Ingresa el 4to Numero: ");
let num5 = +prompt("Ingresa el 5to Numero: ");

// LOS SUMAMOS
let suma = (num1 + num2 + num3 + num4 + num5).toFixed(1);

// DIVIDIMOS LA SUMA EN 5 PARA CALCULAR EL PROMEDIO
let promedio = (suma / 5).toFixed(1);

//IMPRIMIMOS
document.write(`<p style="font-family: 'Roboto', sans-serif; line-height: 2;">Excelente, ${userName}, </br>
tus numeros fueron los siguientes: ${num1}, ${num2}, ${num3}, ${num4}, ${num5} </br>
La suma de todos ellos equivale a: ${suma}. </br>
Y el promedio es ${promedio}.</p> `);
