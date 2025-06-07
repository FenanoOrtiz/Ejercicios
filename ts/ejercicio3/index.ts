//Crear una interfaz para representar un libro y una función que imprima su información.

interface ILibro {
    Titulo:string;
    Genero:string;
    Hojas:number;
    Autor:String;

}

function MostrarLibro(libro:ILibro):void{
    console.log(`
        Titulo: ${libro.Titulo}; 
        Genero: ${libro.Genero}; 
        Autor: ${libro.Autor}; 
        contiene un total de ${libro.Hojas} paginas
        `)
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

class Libro implements ILibro{
    Titulo: string;
    Genero: string;
    Hojas: number;
    Autor: String;
    constructor(Titulo:string, Genero:string, Hojas:number, Autor:string){
        this.Titulo=Titulo;
        this.Genero=Genero;
        this.Hojas=Hojas;
        this.Autor=Autor;

    }
}
const misPutas = new Libro("Mis putas tristes","Novela",480,"Gabriel Garcia Marquez")
MostrarLibro(misPutas)