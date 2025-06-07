const materiasHTML = document.querySelector('.materias');

const materias = [
    {nombre:"estadistica", nota:7},
    {nombre:"calculo", nota:6},
    {nombre:"sociales", nota:8},
    {nombre:"matematicas", nota:9},
    {nombre:"fisica", nota: 10}
];

const muestraMaterias = (index) =>{
    return new Promise((resolve, reject)=>{
        let materia = materias[index];
        if(materia.nombre==undefined) reject("la materia no existe");
        else setTimeout(()=>{
            resolve(materia)
        },Math.random()*3400);
    })
}

const muestraAsinc = async()=>{
    let materia = [];
    for(let i=0; i<materias.length; i++){
        materia[i]= await (muestraMaterias(i));
        //console.log (materia[i]);
        let newHtml=`
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota} </div>
        </div>`;
        materiasHTML.innerHTML += newHtml;
    }
}

muestraAsinc();