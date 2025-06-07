//Crear una función que devuelva el factorial de un número.

function factorial (numero:number):number{
    let resultado:number=1
        for(let i=1; i<=numero;i++){
        resultado*=i
        }
    return resultado
}
console.log("factorial de 0:"+factorial(0))
console.log("factorial de 1:"+factorial(1))
console.log("factorial de 2:"+factorial(2))
console.log("factorial de 3:"+factorial(3))
console.log("factorial de 4:"+factorial(4))
console.log("factorial de 5:"+factorial(5))
console.log("factorial de 6:"+factorial(6))
/*//solucion de ademass
function factorial(numero: number): number {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

console.log(factorial(3))*/


