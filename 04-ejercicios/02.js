/*

Nombre: Ancho x Alto
8K 7680 x 4320
4K 3840 x 2160
WQHD 2560 x 1440
FHD 1920 x 1080
HD 1366 x 768


 */

function nombreResolucion(ancho, alto) {

    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    }else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    }else if (ancho >= 1366 && alto >= 768) {
        return 'WQHD';
    }else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    }else if (ancho >= 1366 && alto >= 768) {
        return 'HD';
    }
}

let nombre = nombreResolucion(2560, 2160);
console.log(nombre); // 