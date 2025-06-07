/*
function debounce(fn, tiempo){
    let tempo;
    return function(...args){
        clearTimeout(tempo);
        tempo = setTimeout(() => {
            fn.apply(this, args)
        }, tiempo);
    }
}

function saludar(nombre){
    console.log(`hola mi nombre es ${nombre}`);
}

const llamaDebounce = debounce(saludar,100);*/

function curry(funcion){
    return function nueva(...args){
        if(args.length>=funcion.length){
            return funcion.apply(this,args);
        }else{
            return function(...args2){
                return nueva.apply(this,args.concat(args2));
            }
        }
        
    }
}
//funcion a procesar
function sumar(a,b,c,d){
    console.log(a+b+c-d);


}
//interface
let sumaCurry = curry(sumar);
// cargamas en sumaCurry la funcion 
let sumar8 = sumaCurry(8);
//console.log(sumar8);
let sumar8y9 = sumar8(9);
//console.log(sumar8y9);
let sumar8y9y6 = sumar8y9(6);
//console.log(sumar8y9y6);
let sumar8y9y6y3=sumar8y9y6(3);
//console.log(sumar8y9y6y3);

function multiplica(a,b,c){
    console.log(a*b*c);
}
let mulCurry = curry(multiplica);
let mulCurry4= mulCurry(4);
//console.log(mulCurry4);
let mulCurry5 = mulCurry4(5);
//console.log(mulCurry5);
let mulCurry6 = mulCurry5(6);
//console.log(mulCurry6);

function saludo(prefijo, nombre) {
    return `${prefijo} ${nombre}`;
}

let saludoFormal = curry(saludo)("Hola, señor/a");
console.log(saludoFormal("Fernando")); // "Hola, señor/a Fernando"
console.log(saludoFormal("Andrea"));   // "Hola, señor/a Andrea"