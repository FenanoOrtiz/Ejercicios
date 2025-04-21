

function sumar(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1+num2;
    document.getElementById('suma').innerHTML=`la suma de ${num1} + ${num2} = ${resultado}`;
}
function multiplica(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1*num2;
    document.getElementById('suma').innerHTML=`la multiplicacion de ${num1} * ${num2} = ${resultado}`;
}


