/* 
Nombre:  ancho x alto
5 8K 7680 X 4320
4 4K 3840 X 2160
3 WQHD 2560 X 1440 
2 FHD 1920 X 1080
1 HD 1280 X 720
0
*/
function nombreResolucion(ancho,alto){
let nivelAncho=0;
let nivelAlto=0;
let nivel=0
let mensaje=''

    if(ancho>=7680) nivelAncho=5;  
    else if (ancho>=3840) nivelAncho=4;
    else if (ancho>=2560) nivelAncho=3;
    else if (ancho>=1920) nivelAncho=2;
    else if (ancho>=1280) nivelAncho=1;
    else nivelAncho=0;

    if(alto>=4320) nivelAlto=5;  
    else if (alto>=2160) nivelAlto=4;
    else if (alto>=1440) nivelAlto=3;
    else if (alto>=1080) nivelAlto=2;
    else if (alto>=720) nivelAlto=1;
    else nivelAlto=0;

    if (nivelAncho<nivelAlto) nivel=nivelAncho
    else nivel=nivelAlto

    switch(nivel){
        case(0): mensaje='no alcanza el nivel mínimo';break;
        case(1): mensaje='HD 1280 X 720';break;
        case(2): mensaje='FHD 1920 X 1080';break;
        case(3): mensaje='WQHD 2560 X 1440';break;
        case(4): mensaje='4K 3840 X 2160';break;        
        case(5): mensaje='8K 7680 X 4320';break;
        default: mensaje='No identificado';break;
    }
    return mensaje;
}

console.log(nombreResolucion(2500,2500))