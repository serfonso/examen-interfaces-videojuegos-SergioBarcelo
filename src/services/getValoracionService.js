import { valoraciones } from "../../public/data/info";

export function getValoracion(id) {
    return Promise((resolve, reject) => {
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