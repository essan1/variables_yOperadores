let userName = prompt(`Hola!
Cuentanos, cual es tu nombre?`);

alert(
  `Muy bien ${userName}, vamos a calcular el nuevo valor de un producto a partir de un % de descuento`
);

let valorOriginal = +prompt('Indicanos cual es el precio original del producto: ')

let descuento = +prompt('Indicanos el % (porcentaje) de descuento que sera aplicado: ')

let valorFinal = valorOriginal-((valorOriginal*descuento) / 100)

document.write(`Excelente ${userName}! </br>
Tenemos que el valor original del producto es $${valorOriginal} </br>
y el porcentaje de descuento que le sera aplicado es del ${descuento}%. </br>
Por lo que el nuevo valor sera de ${valorFinal}.`)