// SALUDO Y PRESENTACION DEL PROGRAMA AL USER

let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(
  `Muy bien ${userName}, vamos a calcular el nuevo valor de un producto a partir de un % de descuento`
);

// PREGUNTAMOS POR EL VALOR ORIGINAL
let valorOriginal = +prompt(
  "Indicanos cual es el precio original del producto: "
);

//PREGUNTAMOS CUANTO DESCUENTO SE LE VA A APLICAR AL VALOR ORIGINAL
let descuento = +prompt(
  "Indicanos el % (porcentaje) de descuento que sera aplicado: "
);

// APLICAMOS LA OPERACION MATEMATICA PARA CALCULAR EL PRECIO FINAL
let valorFinal = Math.floor(valorOriginal - ((valorOriginal * descuento) / 100));

// SE IMPRIME
document.write(`Excelente ${userName}! </br>
Tenemos que el valor original del producto es $${valorOriginal} </br>
y el porcentaje de descuento que le sera aplicado es del ${descuento}%. </br>
Por lo que el nuevo valor sera de ${valorFinal}.`);
