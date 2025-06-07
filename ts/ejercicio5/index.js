//	Crear una función que reciba un arreglo de números y 
// devuelva la suma de todos los elementos.
function sumaArray(num) {
    var resultado = num.reduce(function (acumulador, valorAsumar) { return acumulador + valorAsumar; }, 0);
    return resultado;
}
var array1 = [4, 5, 9, 8, 9, 100];
console.log(sumaArray(array1));
/*
RESPUESTA ADEMASS
function sumarElementos(arreglo: number[]): number {
return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); */ // Salida: 15
