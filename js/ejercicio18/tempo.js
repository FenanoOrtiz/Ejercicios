/*
const saludar=setInterval(()=>{
    document.getElementById('demo').innerHTML+=`hola carebona <br>`
},1000);

//clearTimeout(saludar);

setTimeout(()=>{
    clearInterval(saludar)
},10000);*/


/*
const saludar=() => {
    document.getElementById('demo').innerHTML=`funcion ejecutandose`
};

//setTimeout(saludar,2000);

function debounce(funcion, tiempo){
    setTimeout(funcion,tiempo);
}

debounce(saludar, 4000);*/
/*
const button = document.querySelector('.button');

button.addEventListener("click",saludar);

function saludar(){
    document.getElementById('parrafo').innerHTML+="evento activado click <br>";
}
*/

/*
const usuarios = [
    { id: 1, nombre: "Fernando", edad: 30 },
    { id: 2, nombre: "María", edad: 25 },
    { id: 3, nombre: "Carlos", edad: 35 }
];

const arrayNombres = usuarios.reduce((ac,usuario)=>{
    ac.push(usuario.nombre);
    return ac;
},[]);
console.log(arrayNombres);

const arrayNombresMap = usuarios.map(user=>user.nombre);
console.log(arrayNombresMap);

const edades = usuarios.reduce((acc, usuario) => [...acc, usuario.edad], []);
console.log(edades); // [30, 25, 35];*/

function debounce(funcion, espera) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            funcion.apply(this, args);
        }, espera);
    };
}

function buscar(texto) {
    console.log(`Buscando: ${texto}`);
}

// Crear una versión "debounced" de la función con 500ms de espera
const buscarDebounce = debounce(buscar, 500);

// Simulando varias llamadas rápidas
buscarDebounce("Ho"); // Se cancela
buscarDebounce("Hol"); // Se cancela
buscarDebounce("Hola"); // Se ejecuta después de 500ms sin interrupciones
buscarDebounce("Hola gran doble");

