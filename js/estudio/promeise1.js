//ejercicio del curso verificar datos de array de objetos
class Persona{//class para cada objeto
    constructor(nombre, inst){//constructor de objetos
        this.nombre=nombre;
        this.inst=inst;
    }
};

const datos = [//datos para construir objetos
    ["nombre1","@instagram1"],
    ["nombre2","@instagram2"],
    ["nombre3","@instagram3"],
    ["nombre4","@instagram4"],
    [,"@instagram5"],
    [],
];
let personas =[];//objetos creados a partir de datos
for(let i=0; i<datos.length; i++){
    personas[i]= new Persona(datos[i][0],datos[i][1]);
}
let id=5;//id que va a proporcionar la posicion del objeto en el array personas
//console.log(personas[0]);//Persona {nombre: 'nombre1', inst: '@instagram1'}
//ya tenemos los objetos vamos hacer las verificaciones 

const verificarPersona = (id) =>{
    return new Promise((res, recj)=>{
        if(personas[id]==undefined)recj(`el Id ${id} no contiene ningún objeto`);
        else res (`el id ${id} contiene un objeto`);
    })
};
const verificarNombre = (id) =>{
    return new Promise((res,recj)=>{
        if(personas[id].nombre == undefined){
            verificarInstagram(id).then((res)=>{
                console.log(res);
                recj (`el id ${id} no registra nombre `);
                
            }).catch((e)=>{
                console.log(e);
                recj(`el id ${id} no registra nombre ni instagram`);

            })
        } else{
            res(`su nombre es ${personas[id].nombre}`);
        }
    })
}
function verificarInstagram(id){
    return new Promise((res,rejc)=>{
        if(personas[id].inst==undefined) rejc(`el id: ${id} no registra instagram`);
        else res(`su instagram es: ${personas[id].inst}`);
    });
}

/*
verificarPersona(id).then((res)=>{
    console.log(res);
    return verificarNombre(id);
}).then((res)=>{
    console.log(res);
    return verificarInstagram(id);
}).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});*/


verificarPersona(id).then((res)=>{
    console.log(res);
    return verificarNombre(id);
}).then((res)=>{
    console.log(res);
    return verificarInstagram(id);
}).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});