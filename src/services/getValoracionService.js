import { valoraciones } from "../../public/data/info.js";

export function getValoracion(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const valoracion = valoraciones.find( v => v.id === id)?.puntuacion

            if (valoracion) {
                resolve (valoracion)
            } else {
                reject (`la valoracion del juego con id ${id} no existe`)
            }
        }, 900);
    })
}