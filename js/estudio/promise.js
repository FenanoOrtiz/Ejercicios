//ejercicio de verificacion de datos con muestra de errores

let nombre = "luis";
let apellido = "ortiz";
let cedula = 88205852;

const verificaNombre = (nombre)=>{
    return new Promise((resolve,reject)=>{
        if(nombre!=="luis")reject(`el nombre ingresado ${nombre} no es valido`);
        else resolve(`su nombre es ${nombre}`);
    })
}
const verificarApellido = (apellido)=>{
    return new Promise((res,rej)=>{
        if(apellido!=="ortiz"){
            rej(`el apellido ingresado ${apellido} no es valido`);
        }else res(`su apellido es: ${apellido}`);
    })
}

const verificaCedula = (cedula)=>{
    return new Promise((res, rej)=>{
        if (cedula!==88205852)rej(`la cedula ingresada ${cedula} no es valida`);
        else res(`su cedula es ${cedula}`);
    })
}

verificaNombre(nombre).then((resp)=>{
    console.log(resp)
    return verificarApellido(apellido);
}).then((resp)=>{
    console.log(resp);
    return verificaCedula(cedula);
}).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
})