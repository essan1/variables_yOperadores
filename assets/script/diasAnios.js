let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(`${userName}, vamos a convertir los dias que nos indiques,
a su equivalente en Años, Semanas y Dias`);

let diasUser = prompt("Ingresa cuantos dias deseas convertir: ");

let dias = parseInt(diasUser);

let years = Math.floor(dias/365);

dias = dias % 365;

let weeks = Math.floor(dias / 7);

dias = dias % 7;

document.write(`Muy bien, tenemos que ${diasUser} dias, equivalen a: </br> ${years} año(s), ${weeks} semana(s) y ${dias} dia(s)`);