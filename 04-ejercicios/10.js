/**
 * Crear array de longitud N, y que sus elementos sean
 * números de 1 hasta N
 */
let longitud=7;

function crearArreglo(n){
    let arreglo=[];
    
    if (n<0) return [];

    for(let x=0;x<n;x++){
        arreglo[x]=x+1;
    }
    return arreglo;
}

console.log(crearArreglo(longitud));