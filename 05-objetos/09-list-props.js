const punto={
    x:10,
    y:15,
    /* dibujar:function(){
        console.log('Dibujando');
     */
    dibujar(){
        console.log('Dibujando');
    }
}

//delete punto.dibujar;
if('dibujar' in punto) punto.dibujar();

let keys=Object.keys(punto);
console.log(keys);

for (let item of Object.keys(punto)){
    console.log(item,punto[item]);
}


for (let entry of Object.entries(punto)){
    console.log(entry);
}