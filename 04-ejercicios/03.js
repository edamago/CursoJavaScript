/*
indice validar que no sea menor a cero y que el elemento exista en el array
*/

function getbyIdx(arr,idx){
    if(idx<0 || arr.length<=idx) return 'Error: índice debe ser mayor a cero o de la longitud del arerglo';
    
    
    
    return arr.length;//arr[idx];
}

console.log(getbyIdx([1,2],2));