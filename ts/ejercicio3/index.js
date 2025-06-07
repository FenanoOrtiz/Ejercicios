//Crear una interfaz para representar un libro y una función que imprima su información.
function MostrarLibro(libro) {
    console.log("\n        Titulo: ".concat(libro.Titulo, "; \n        Genero: ").concat(libro.Genero, "; \n        Autor: ").concat(libro.Autor, "; \n        contiene un total de ").concat(libro.Hojas, " paginas\n        "));
}
/*
const laMaria: ILibro = {
    Titulo: "La Maria",
    Genero:"Novela",
    Hojas:425,
    Autor:"Jorge Isaac"

}

MostrarLibro(laMaria);*/
//CREAR EL LIBRO CON CLASE
var Libro = /** @class */ (function () {
    function Libro(Titulo, Genero, Hojas, Autor) {
        this.Titulo = Titulo;
        this.Genero = Genero;
        this.Hojas = Hojas;
        this.Autor = Autor;
    }
    return Libro;
}());
var misPutas = new Libro("Mis putas tristes", "Novela", 480, "Gabriel Garcia Marquez");
MostrarLibro(misPutas);
