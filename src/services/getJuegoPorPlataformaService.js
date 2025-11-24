import { juegos } from "../../public/data/info";

export function getJuego(nombrePlataforma) {
    return Promise((resolve) => {
        setTimeout(() => {
            const plataforma = juegos.filter( j => j.plataforma === nombrePlataforma)

            if (plataforma) {
                resolve (juego)
            } else {
                return []
            }
        }, 1000);
    })
}