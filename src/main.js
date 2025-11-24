import { getJuegoPorPlataforma } from "./services/getJuegoPorPlataformaService.js";
import { getJuego } from "./services/getJuegoService.js";
import { getValoracion } from "./services/getValoracionService.js";

const btnId = document.getElementById("btn-id");
const btnPlataforma = document.getElementById("btn-plataforma");
const btnIdValoracion = document.getElementById("btn-id-valoracion");
const salida = document.getElementById("salida");

//Servicio 1
function findJuego (id) {
    getJuego(id)
        .then((resultado) => {
            salida.textContent = `Juego encontrado:\n -ID: ${resultado.id}\n -Titulo: ${resultado.titulo}\n -plataforma: ${resultado.plataforma}`
        })
        .catch((error) => {
            salida.textContent = error
        });
}

btnId.addEventListener("click", () => {
    const input = parseInt(prompt("Introduce el ID del juego que quiere ver:"));
    try{
        findJuego(input)
    } catch(error) {
        salida.textContent = error.message
    }
})

//Servicio 2
function findValoracion (id) {
    Promise.all([getJuego(id),getValoracion(id)])
        .then(([juego, valoracion]) => {
            salida.textContent = `Juego y valoración:\n -titulo: ${juego.titulo} (${juego.plataforma})\n -puntuación: ${valoracion}/10`
        })
        .catch((error) => {
            salida.textContent = error
        });
}

btnIdValoracion.addEventListener("click", () => {
    const input = parseInt(prompt("Introduce el ID del juego para ver su valoración:"));
    try{
        findValoracion(input)
    } catch (error) {
        salida.textContent = error.message
    }
})

//servicio 3
async function findPlataforma (plataforma) {
    try {
        const resultado = await getJuegoPorPlataforma(plataforma);
        console.log(resultado)
        var cadena = `Juegos encontrados para la plataforma "${plataforma}":`
        resultado.forEach(juego => {
            cadena += `\n -[${juego.id}] ${juego.titulo} (${plataforma})`
        });
        salida.textContent = cadena
    } catch (error) {
        salida.textContent = error
    }
}

btnPlataforma.addEventListener("click", () => {
    const input = prompt("Introduce el nombre de la plataforma para ver sus juegos:");
    try {
        findPlataforma(input)
    } catch (error) {
        salida.textContent = error
    }
})