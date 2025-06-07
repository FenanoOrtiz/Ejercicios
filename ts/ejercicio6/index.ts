//Crear una función que determine si un número es par o impar.

const parOImpar =(num:number):string=>{
  return  (num%2 ==0? "es par": "es impar");
    
}

console.log(parOImpar(4))
console.log(parOImpar(15))
console.log(parOImpar(3))