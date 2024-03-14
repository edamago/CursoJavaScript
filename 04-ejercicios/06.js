/**
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array 
 */

let arreglo=[2,5,7,-15,-5,-100,55];

function cuantosPositivos(arr){
    let cont=0;
    let numeroArreglo=[1,2];
    for(let numero of arr){
        //if(numero>0) cont++;
        if(numero>0) numeroArreglo.push[numero];
        //console.log(numero);
    }
    return numeroArreglo;
    //return cont;
}

let resultado=cuantosPositivos(arreglo);

console.log(resultado);