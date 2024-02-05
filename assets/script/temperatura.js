// SALUDO Y PRESENTACION DEL PROGRAMA AL USER

let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(`${userName}, vamos a convertir grados Celcius a Fahrenheit y Kelvin!`);

// SE SOLICITA AL USER QUE INGRESE LOS GRADOS CELCIUS 
let gradosCelcius = +prompt("Ingresa los grados Celcius en un numero entero: ");

// SE REALIZAN LAS OPERACIONES CORRESPONDIENTES PARA CALCULAR LOS GRADOS KELVIN Y FAHRENHEIT 
let gradosKelvin = gradosCelcius + 273.15;
let gradosFahrenheit = gradosCelcius * 1.8 + 32;

// SE IMPRIMEN LOS RESULTADOS
document.write(`Excelente ${userName}, </br>
tenemos que  ${gradosCelcius}° Celcius equivalen a: </br>
${gradosKelvin}° Kelvin, </br>
y ${gradosFahrenheit}° Fahrenheit!`);
