
class Persona{
    constructor(nombre, instagram){
        this.nombre=nombre;
        this.instagram=instagram;
    }
}

const datos=[
    ["juan", "@juan"],
    ["pedro", "@pedro"],
    ["luis", "@luis"],
    ["lina", "@lina"],
    ["carlos", ]
];
const personas=[];
for (let i=0; i<datos.length; i++){
     personas[i]= new Persona(datos[i][0],datos[i][1]);
}

/* //solucion fácil
const obtenerPersona = (id)=>{
   if(personas[id]==undefined){
    console.log("persona no existe");
   }else if(personas[id].instagram==undefined){
        console.log(`nombre:${personas[id].nombre}, no tiene instagram`);
   }else{
    console.log(`nombre:${personas[id].nombre}, instagran: ${personas[id].instagram}`);
   }
}
*/

const obtenerPersona = (id, cb)=>{
	if (personas[id]==undefined){
		cb("No se ha encontrado la persona",null);
	}else{
		cb(null,personas[id]);
	}
}

const obtenerInstagram = (id,cb)=>{
	if (personas[id].instagram ==undefined){
		cb("No se ha encontrado el instagram",null);
	}else{
		cb(null,personas[id].instagram)
	}
}
let id=0;


    
    
/*    
const fun=   (err,persona,id)=>{
	if (err){console.log(err);
	}else{
		console.log(persona.nombre);
		obtenerInstagram(id,fun2)
    }	
}//5:13
 
const fun2=(err,instagram)=>{
    if(err){console.log(err);
    }else {
        console.log(instagram);
    }
}*/
obtenerPersona(id,(err,persona)=>{
    if(err)(console.log(err));
        else{
            console.log(persona.nombre);
            obtenerInstagram(id,(err,inst)=>{
                if(err){console.log(err)}else{
                    console.log(inst);
                }
            })
        }
});
    