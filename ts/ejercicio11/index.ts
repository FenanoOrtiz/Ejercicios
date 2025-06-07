//Crear una función que reciba un arreglo de números 
// y devuelva un arreglo con solo los números pares.
/*
//SOLUCION 1 por medio de foreach
function pares(num:number[]):number[]{
    let pares:number[]=[];
    num.forEach((numero)=>{
        if(numero%2==0){
            pares.push(numero)
        }
    })
    return pares
}
*/


/*

// SOLUCION 2 por medio de recursividad
const arraySalida:number[]=[]
function pares1(num:number[]):number[]{
   
    if(num[0]===undefined){
        return arraySalida
    }else if(num[0]%2==0){
        arraySalida.push(num[0])
        num.shift()
        return pares1(num)
    }else{
        num.shift()
        return pares1(num)
    }
}
let array1:number[]=[4,5,6,8,91,16,27]
let array2:number[]=(pares1(array1))
console.log(array2)
*/

// SOLUCION ADEMASS

function numerosPares(arreglo: number[]): number[] {
    return arreglo.filter(numero => numero % 2 === 0);
}

const numeros = [2,5,6,8,9,41,52,26,25];
console.log(numerosPares(numeros)); // Salida: 

