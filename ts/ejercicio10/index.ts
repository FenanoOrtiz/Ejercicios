//Crear una función que devuelva el 
// número más grande de un arreglo de números.
//solucion mia

function mayor(num:number[]):number{
    if(num.length===1){
        return num[0]
        //console.log(`el numero mayor es ${num[0]}`)//asi se hace si
        //la funcion no retorna valor
    }else{
        if(num[0]<num[1]){
            num.shift()
        }else{
            num.splice(1,1)
        }
        return mayor(num)//se utiliza el return porque llama de nuevo 
        //a la funcion
    }
}
let numeros:number[]=[9,2,5,150,6,98]
console.log(`el numero mayore es: ${mayor(numeros)}`)

//SOLUCION ADEMASS Y  ES MAS OPTIMA PUES UTILIZA EL MODULA MATH
/*
function mayor(arreglo:number[]):number{
    return Math.max(...arreglo)
}
let numeros:number[]=[9,2,5,150,6,98]
console.log(`el numero mayore es: ${mayor(numeros)}`)
*/
