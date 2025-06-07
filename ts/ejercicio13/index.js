//Crear una función que reciba un objeto con nombres de 
// estudiantes y sus respectivas calificaciones, y 
// devuelva un arreglo de objetos con los nombres de los 
// estudiantes que aprobaron.
// Array de estudiantes
var estudiantes = [
    { nombre: "Fernando", notas: [90, 85, 88, 92] },
    { nombre: "María", notas: [78, 80, 85, 89] },
    { nombre: "Carlos", notas: [95, 92, 90, 93] },
    { nombre: "Laura", notas: [60, 65, 70, 75] }, // Este promedio será menor a 70
];
function obtenerEstudiantesConPromedioAlto(estudiantes) {
    return estudiantes.filter(function (estudiante) {
        var promedio = estudiante.notas.reduce(function (suma, nota) { return suma + nota; }, 0) / estudiante.notas.length;
        return promedio > 70;
    });
}
// Llamada a la función y muestra de resultados
var estudiantesConPromedioAlto = obtenerEstudiantesConPromedioAlto(estudiantes);
console.log(estudiantesConPromedioAlto);
