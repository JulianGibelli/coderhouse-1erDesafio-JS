//programa que pide cuantos elementos a comprar
//pide nombre,valor y devuelve valor final

function iterador(indice) {
  let acumulador = 0  
  for (let i = 0; i < indice; i++) {
    let nombreEl = prompt("Ingrese nombre del elemento: ");
    let valor = parseInt(prompt("Ingrese su valor: "));
    let resultadoParcial = calcular(valor)
    console.log("El valor de la operacion parcial es: $", resultadoParcial," --> ",nombreEl);
    acumulador += resultadoParcial
  }
  return acumulador
}

function calcular(valor) {
  const iva = 1.21
  return valor * iva;
}

function control() {
  let flag = true;
  while (flag) {
    let indice = parseInt(prompt("Cuantos elementos quiere comprar?"));

    console.log("El total a pagar es de: $",iterador(indice)) ;

    flag = window.confirm("Desea continuar calculando? ");
  }
}

function main() {
  control();
}

main();
