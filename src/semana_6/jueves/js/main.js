/**
 * Registrar eventos por propiedad
 */

const btn1 = document.querySelector(".js_btn_1");
console.log(btn1);
btn1.onclick = function(){
    console.log("Hola mundo");
}
btn1.onclick = function(){
    console.log("Hola mundo funcion 2");
}

setTimeout(()=>{
    btn1.onclick = null;
}, 2000);

/**
 * ADDEVENTLISTENER
 */
 const btn2 = document.querySelector(".js_btn_2");
 
 function eventOne(){
     console.log("Hola desde AddEventListener eventOne");
     btn2.removeEventListener("click", eventOne);
 }

 function eventTwo(){
    console.log("Hola desde AddEventListener eventTwo");
    //btn2.removeEventListener("click", eventTwo);
}
//Registrar eventos

btn2.addEventListener("click", eventOne);
btn2.addEventListener("click", eventTwo);

/* 
usar addEventListener para registrar el evento submit
tambien tendras que utilizar .preventDefault para evitar el comportamiento
por defecto del evento submit

tomar los valores de los input e imprimirlos con alert

hola mi nombre es sebastian yabiku
*/

const form = document.querySelector("form");

function saludar(e){
    e.preventDefault();
    alert(`Hola mi nombre es: ${form.querySelector("input").value} ${form.querySelectorAll("input")[1].value}`)
}

form.addEventListener("submit", saludar);