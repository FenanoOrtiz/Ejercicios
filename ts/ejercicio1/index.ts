// Crear una función que sume dos números.
/*

function suma(a:number,b:number):void{
    let result:number = a+b
    console.log (`la suma ${a} + ${b} = ${result}`)
}

suma(4,15)*/

import * as readline from 'readline';
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingresa un número: ', (respuesta) => {
  const numero = parseFloat(respuesta);
  if (!isNaN(numero)) {
    console.log(`Has ingresado el número: ${numero}`);
  } else {
    console.log('Eso no es un número válido.');
  }
  rl.close();
});*/

const leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leer.question(`por favor, ingrese un numero: `,(res)=>{
    const num1 = parseFloat(res);
    leer.question(`ingrese el segundo numero: `,(res)=>{
        const num2 = parseFloat(res);
        if(!isNaN(num1)||isNaN(num2)){
            let suma = num1+num2
            console.log("resultado es:"+suma)
        }else{
            console.log(`digite numero validos`)
        }
        leer.close()
    })
    
})