let resultado = document.getElementById('resultado');
let input = document.getElementById('buscar');

function debounce(funcion, espera) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            funcion.apply(this, args);
        }, espera);
    };
}

function realizarBusqueda(consulta) {
   resultado.textContent = `Buscando: ${consulta}`;
}

const buscarDebounced = debounce(realizarBusqueda, 500);

input.addEventListener("input", (event) => {
    buscarDebounced(event.target.value);//- event.target.value obtiene el valor actual que el usuario ha escrito.

});