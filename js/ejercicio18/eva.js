const input = document.getElementById('buscar');
const salida = document.getElementById('texto');

function debounce(fun, time){
    let contTime;
    return function(...args){
        clearTimeout(contTime);
        contTime=setTimeout(()=>{
            fun.apply(this,args);
        },time);
    };
}

function prueba(texto){
    salida.innerHTML=`el texto que se busca es ${texto}`;
}

const utilizaDebounce = debounce(prueba,1000);

input.addEventListener("input",(e)=>{
    utilizaDebounce(e.target.value);
});