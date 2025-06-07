//string
let myStringVar:string = "hola"
myStringVar="Fernando"
console.log(myStringVar)

 //numeros
 let varNumber:number=40
 console.log(varNumber)

 //Boolean
 let varBool:boolean=false
 console.log(varBool)

 //Null   
 let varNull:null=null
 console.log(varNull)

 //Undefines
 let varUndefined:undefined //no necesita igualarse
 console.log(varUndefined)

 //FUNCIONES

 
 function myName(nombre:string):string{
    return `mi nombre es ${nombre}`
 }

 //console.log(myName("Fernando"));

 const miNombre = (nombre:string): string =>{
    return `mi nombre es ${nombre}`
 }

 //console.log (miNombre("Juanito"))

 let miNombreV2: (name:string)=>void;
 miNombreV2=(name)=>{
    console.log(name)
 }

const aux = myName(myStringVar)
const aux2 = miNombre(myStringVar)

console.log(aux)
console.log(aux2)
miNombreV2("Carlos")

