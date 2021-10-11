const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Nicolás Corti";
const tema = "TEMA 1";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./jsonHelper");
// A
const gestionDePeliculas ={
    /******************************/
    // B
    peliculas: jsonHelper.leerJson("peliculas"),
    /******************************/
    // C
    listarPeliculas: function (arrayDePeliculas) {
        arrayDePeliculas.forEach(
            (pelicula) => {
            let premiada = pelicula.fuePremiada ? "premiada" : "sin premios";
            console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración de ${pelicula.duracion} minutos, ${premiada} (${pelicula.calificacionIMDB} en IMDB)`);
            }
        );
    },
    /******************************/
    // D
    buscarPorTitulo: function (titulo) {
        return this.peliculas.find((pelicula) => pelicula.titulo === titulo);
    },
    /******************************/
    // E
    peliculasPremiadas: function () {
        return this.peliculas.filter((pelicula) => pelicula.fuePremiada);
    },
    /******************************/
    // F
    filtrarPorDuracion: function (duracionMinima, duracionMaxima) {
        return this.peliculas.filter((pelicula) => pelicula.duracion >= duracionMinima && pelicula.duracion <= duracionMaxima);
    },
    /******************************/
    // G
    ordenarPorCalificacion: function () {
        return this.peliculas.sort((a, b) => a.calificacionIMDB - b.calificacionIMDB);
    },
    /******************************/
    // H
    duracionTotal: function () {
        let duracionTotal = this.peliculas.reduce(
            (a, pelicula) => a + pelicula.duracion,
            0
        );
        return `La duración de todas las películas sumadas es de ${duracionTotal} minutos`;
    },
    /******************************/
    // I
    premiarPeliculaPorTitulo: function (titulo) {
        let peliculaAPremiar = this.buscarPorTitulo(titulo);
        if (peliculaAPremiar !== undefined) {
            peliculaAPremiar.fuePremiada = true;
            jsonHelper.escribirJson("peliculas", this.peliculas);
        }else(console.log(peliculaAPremiar))
    },
    /******************************/
};



/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
// Ejecución aquí
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.log(gestionDePeliculas.buscarPorTitulo("Career Girls"));

// Ejecución aquí
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPremiadas());
// Ejecución aquí
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorDuracion(80,110));
// Ejecución aquí
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorCalificacion());
// Ejecución aquí
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(gestionDePeliculas.duracionTotal());
// Ejecución aquí
console.log(o);

console.log(v, oo + " .I. Premiar");
// Ejecución aquí
console.log(gestionDePeliculas.buscarPorTitulo("Axed"));
gestionDePeliculas.premiarPeliculaPorTitulo("Axe");
console.log(gestionDePeliculas.buscarPorTitulo("Axed"));
// Ejecución aquí
console.log(o);
