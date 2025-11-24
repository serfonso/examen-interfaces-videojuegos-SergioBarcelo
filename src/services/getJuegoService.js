import { juegos } from "../../public/data/info";

export function getJuego(id) {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            const juego = juegos.find( j => j.id === id)

            if (juego) {
                resolve (juego)
            } else {
                reject (`El juego con id ${id} no existe`)
            }
        }, 800);
    })
}