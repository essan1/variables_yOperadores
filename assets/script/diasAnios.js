// SALUDO Y PRESENTACION DEL PROGRAMA AL USER

let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(`${userName}, vamos a convertir los dias que nos indiques,
a su equivalente en Años, Semanas y Dias`);

// SE SOLICITA INGRESAR EL NUMERO DE DIAS
let diasUser = prompt("Ingresa cuantos dias deseas convertir: ");

// CONVERTIMOS LOS DIAS INGRESADOS, ESTA VEZ EN UNA LINEA APARTE, PARA MANTENER EL INPUT ORIGINAL DEL USER Y PODER IMPRIMIRLO EN EL DOCUMENT.WRITE
let dias = parseInt(diasUser);

//DIVIDIMOS LOS DIAS EN 365 PARA SABER A CUANTOS AÑOS EQUIVALEN, AÑADIMOS MATH.FLOOR PARA OBTENER LA PARTE ENTERA DEL DECIMAL
let years = Math.floor(dias / 365);

// ACTUALIZAMOS DIAS CON EL RESIDUO DE DIAS/365, PARA EVENTUALMENTE SABER CUANTAS SEMANAS TENEMOS
dias = dias % 365;

// CALCULAMOS LAS SEMANAS, DIVIDIENDO DIAS YA ACTUALIZADOS POR 7.
let weeks = Math.floor(dias / 7);

// FINALMENTE, EL RESIDUO DE DIAS Y 7, EQUIVALE A CUANTOS DIAS QUEDAN.
dias = dias % 7;

//IMPRIMIMOS RESULTADO
document.write(
  `<p style="font-family: 'Roboto', sans-serif; line-height: 2;">Muy bien, tenemos que ${diasUser} dias, equivalen a: </br> ${years} año(s), ${weeks} semana(s) y ${dias} dia(s)</p>`
);
