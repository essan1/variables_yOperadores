let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(`${userName}, vamos a hacer un par de operaciones matematicas! 
Necesitamos que ingreses dos numeros, que sean diferentes, y mayores a cero.`);

let num1 = +prompt("Ingresa el primer Numero");
let num2 = +prompt("Ingresa el segundo Numero");

document.write(`${userName}, los numeros que seleccionaste fueron ${num1} & ${num2} </br>
La suma de ambos numeros es igual a 
${num1 + num2}. </br>
La resta de ambos numeros es igual a ${num1 - num2} </br>
La multiplicacion de ambos numeros es igual a ${num1 * num2} </br>
La division de ambos numeros es igual a ${num1 / num2} </br>
Y, finalmente, el modulo de ambos numeros es igual a ${num1 % num2}`);
