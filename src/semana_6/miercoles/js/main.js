/**
 * EVENTOS
 */
const button = document.querySelector(".js_button");
const button2 = document.querySelector(".js_button_2");

//registrando un evento

function toggleMenu(){
    const menu = this.querySelector(".menu");
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

//registrando un evento
button.onclick = toggleMenu;
button2.onmouseover = toggleMenu;
button2.onmouseout = toggleMenu;

const button3 = document.querySelector(".js_button_3");
button3.onclick = function(){
    button.style.background = "purple";
}
