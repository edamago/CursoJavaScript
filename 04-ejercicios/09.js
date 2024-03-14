/**
 * Crear algoritmo que devuelva un array de objetos 
 * en base a pares
 */
let pares =[
   [1,{name:'Daniel'}],
   [2,{name:'Sofia'}],
   [3,{name:'Oswaldo'}]
];

function devolverArregloObjetos(arr){
    let arregloResultado=[];
    let cont=0;
    for(let item of arr){
        arregloResultado[cont]=item[1];
        arregloResultado[cont].id=item[0];
        cont++;
    }

    return arregloResultado;
}

console.log(devolverArregloObjetos(pares));