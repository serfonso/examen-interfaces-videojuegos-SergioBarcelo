import { juegos } from "../../public/data/info.js";

export function getJuegoPorPlataforma(nombrePlataforma) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const plataforma = juegos.filter( j => j.plataforma === nombrePlataforma)

            if (plataforma) {
                resolve (plataforma)
            } else {
                return []
            }
        }, 1000);
    })
}