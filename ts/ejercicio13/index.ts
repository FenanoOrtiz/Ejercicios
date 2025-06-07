//Crear una función que reciba un objeto con nombres de 
// estudiantes y sus respectivas calificaciones, y 
// devuelva un arreglo de objetos con los nombres de los 
// estudiantes que aprobaron.

//SOLUCION FERNANDO

/*
interface IEstudiante{
    nombre:String;
    nota1:number;
    nota2:number;
    nota3:number;
    nota4:number;
}

const estudiantes: IEstudiante[]=[
    {nombre:"juan P",nota1:10,nota2:30,nota3:40,nota4:36},
    {nombre:"Carlos R",nota1:40,nota2:40,nota3:50,nota4:50},
    {nombre:"Esteban C",nota1:20,nota2:30,nota3:20,nota4:45},
    {nombre:"Luisa R",nota1:25,nota2:35,nota3:40,nota4:50}
]
   


// https://www.typescriptlang.org/docs/handbook/2/objects.html

function aprobaron(estu:IEstudiante[]){
    let aprobaron:String[]=[]
    for(let i=0; i<estu.length; i++){
       let promedio:number=(estu[i].nota1  + estu[i].nota2+ estu[i].nota3 +estu[i].nota4)/4
       // console.log(`${estu[i].nombre} tiene un promedio de ${promedio}`)
       let final:String = promedio.toLocaleString()
       if (promedio >=30){
        aprobaron.push("abrobo",estu[i].nombre,`nota:${final}`)
       }
    }
    console.log(aprobaron)
}

aprobaron(estudiantes)
*/

// SOLUCION ADEMASS 
/*
interface INotas {
    [nombre: string]: number;
}

function Aprobados(notas: INotas): string[] {
    return Object.keys(notas).filter(nombre => notas[nombre] >= 60);
   
}


const calificaciones = {
    'Juan': 70,
    'María': 55,
    'Pedro': 80,
    'Ana': 45
};

console.log(Aprobados(calificaciones)); 
*/
type Estudiante = {
    nombre: string;
    notas: [number, number, number, number];
};

// Array de estudiantes
const estudiantes: Estudiante[] = [
    { nombre: "Fernando", notas: [90, 85, 88, 92] },
    { nombre: "María", notas: [78, 80, 85, 89] },
    { nombre: "Carlos", notas: [95, 92, 90, 93] },
    { nombre: "Laura", notas: [60, 65, 70, 75] }, // Este promedio será menor a 70
];

function obtenerEstudiantesConPromedioAlto(estudiantes: Estudiante[]): Estudiante[] {
    return estudiantes.filter(estudiante => {
        const promedio = estudiante.notas.reduce((suma, nota) => suma + nota, 0) / estudiante.notas.length;
        return promedio > 70;
    });
}

// Llamada a la función y muestra de resultados
const estudiantesConPromedioAlto = obtenerEstudiantesConPromedioAlto(estudiantes);
console.log(estudiantesConPromedioAlto);