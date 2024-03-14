/**
 * crear un algoritmo que devuelva numero
 * menor y mayo de un array
 */

let arreglo=[2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
let mayor=arr[0];
let menor=arr[0];

    for (let numero of arr){
        //if(numero<menor) menor=numero;
        //if(numero>mayor) mayor=numero;

        menor=(numero<menor)?numero:menor;
        mayor=(numero>mayor)?numero:mayor

        //console.log(numero);
    }
    //return 'El numero mayor es: '+ mayor + '. El numero menor es: ' + menor;
    let arregloRespuesta=[menor,mayor];
    //return arregloRespuesta;
    return [menor,mayor];
}

let mensajes=getMenorMayor(arreglo);
console.log(mensajes);