const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const h5 = document.querySelector("h5");
const h6 = document.querySelector("h6");

let style = {
    color: "red",
    fontSize: "20px",
    background: "dark",
    fontFamily: "arial",
};

const modefiNode = (nodo, style) =>{
    nodo.style.color = style.color;
    nodo.style.fontSize = style.fontSize;
    nodo.style.background = style.background;
    nodo.style.fontFamily = style.fontFamily;
}

modefiNode(h1, style);
modefiNode(h2, style);
modefiNode(h3, style);
modefiNode(h4, style);
modefiNode(h5, style);
modefiNode(h6, style);