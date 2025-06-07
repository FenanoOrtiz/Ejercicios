//	Crear una función que reciba un arreglo de números y 
// devuelva la suma de todos los elementos.

function sumaArray(num:number[]):number{
    let resultado = num.reduce((acumulador, valorAsumar)=>acumulador+valorAsumar,0)
    return resultado
}

let array1:number[]=[4,5,9,8,9,100]
console.log(sumaArray(array1))



/*
RESPUESTA ADEMASS
function sumarElementos(arreglo: number[]): number {
return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); */ // Salida: 15


