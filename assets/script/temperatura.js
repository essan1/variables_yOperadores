let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(`${userName}, vamos a convertir grados Celcius a Fahrenheit y Kelvin!`);

let gradosCelcius = +prompt("Ingresa los grados de temperatura en Celcius: ");

let gradosKelvin = gradosCelcius + 273.15;

let gradosFahrenheit = gradosCelcius * 1.8 + 32;

document.write(`Excelente ${userName}, </br>
tenemos que  ${gradosCelcius}° Celcius equivalen a: </br>
${gradosKelvin}° Kelvin, </br>
y ${gradosFahrenheit}° Fahrenheit!`);