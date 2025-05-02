let numeros = [4,3,5,6,4,7,8,9,11,13,14];


document.getElementById('entrada').innerHTML=numeros;


//let numPar = numeros.filter(num=>(num%2)==0);




const filtrarPares = (num)=>{
    return num.filter(n=> (n%2)==0);
}

let numPar= filtrarPares(numeros);


document.getElementById('salida').innerHTML=numPar;
