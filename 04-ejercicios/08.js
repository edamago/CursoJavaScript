/**
 * Crear algoritmo que tome un array de objetos 
 * y devuelva un array de pares
 */
let arreglo =[
    {
        id: 1,
        name:'Isabel',
    },
    {
        id: 2,
        name:'Daniel',
    },
    {
        id: 3,
        name:'Sofia',
    }
];

function devolverArregloPares(arr){
    let arregloResultado=[];
    let cont=0;
    //for(let item of arr){
    /* for(idx in arr){
        let elemento=arr[idx];
        arregloResultado[idx]=[elemento.id,elemento];
    } */
    for(let item of arr){
        arregloResultado[cont]=[item.id,item];        
        cont++;
    }

    return arregloResultado;
}

console.log(devolverArregloPares(arreglo));