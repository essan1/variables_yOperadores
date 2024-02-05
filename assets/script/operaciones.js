// SALUDO Y PRESENTACION DEL PROGRAMA AL USER 

let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(`${userName}, vamos a hacer un par de operaciones matematicas! 
Necesitamos que ingreses dos numeros, que sean diferentes, y mayores a cero.`);

// SE LE PIDE AL USER QUE INGRESE LOS 2 NUMEROS 
let num1 = +prompt("Ingresa el primer Numero");
let num2 = +prompt("Ingresa el segundo Numero");

// SE IMPRIME LA RESPUESTA CON UN Document.WRITE DONDE ADEMAS REALIZAMOS LOS CALCULOS PARA AHORRAR LINEAS DE CODIGO
document.write(`<p style="font-family: 'Roboto', sans-serif; line-height: 2;">${userName}, los numeros que ingresaste fueron ${num1} & ${num2} </br>
La suma de ambos numeros es igual a 
${num1 + num2}. </br>
La resta de ambos numeros es igual a ${num1 - num2} </br>
La multiplicacion de ambos numeros es igual a ${num1 * num2} </br>
La division de ambos numeros es igual a ${(num1 / num2).toFixed(2)} </br>
Y, finalmente, el modulo de ambos numeros es igual a ${num1 % num2}</p>`);