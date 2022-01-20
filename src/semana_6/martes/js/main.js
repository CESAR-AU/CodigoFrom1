/*
DOM
Dado 3 parrafos y dentro un enlace por cada uno

atrapar cada uno de los parrafos y 
cambiarle el color,
cambiarle el tamaño de fuente 
cambiarle el font family

atrapar el enlace en relacion al parrafo 
y cambiarle el atributo href y su texto 


Lo optimo seria crear una funcion que reciba un elemento tipo nodo,
y tambien las propiedades a manipular
*/
let params = {
    color: "red",
    fontSize: "12px",
    fontFamily:"Arial",
}

const setAtributesP = (params) =>{
    let parrafos = document.querySelectorAll("p");
    console.log("%O", parrafos);
    parrafos = Array.from(parrafos);    
    parrafos.map((p) =>{ 
        p.setAttribute("style", `color: ${params.color};
        font-family: ${params.fontFamily};
        font-size: ${params.fontSize}`);
        const a = p.querySelectorAll("a");
    });
    
}

setAtributesP(params);