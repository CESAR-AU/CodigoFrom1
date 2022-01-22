/**
 * CCSOM
 */
const button = document.querySelector("button");
const body = document.querySelector("body");
const div = document.querySelector("div");

function ejm1() {
    button.onclick = function () {
        console.log("Funcion!!")
        body.style.backgroundColor = "yellow";

        console.log(window.getComputedStyle(body).backgroundColor);
        console.log("body.style.background ", body.style.backgroundColor);

        if (body.style.backgroundColor == "yellow") body.style.backgroundColor = "white";
        else body.style.backgroundColor = "yellow";
    }
}

function ejm2() {
    button.onclick = function () {
        //body.classList.add("bg-yellow");
        //body.classList.add("bg-red");
        //body.classList.toggle("bg-yellow");
        //body.classList.remove("bg-yellow");
        console.log(body.classList.contains("bg-yellow"));

        body.classList.replace("class-cargando", "bg-yellow");
    }
}

setTimeout(() => {
    div.classList.replace("class-cargando", "class-fin-carga");
}, 1000)

//ejm2();

function ejm3() {
    
    button.onclick = function () {

        let objArticulos = {
            titulo: prompt("Titulo del articulo"),
        };

        const article = document.createElement("article");
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        article.innerHTML = `${objArticulos.titulo}`;

        code.innerHTML = `const article = document.createElement("article");
       const pre = document.createElement("pre");
       const code = document.createElement("code");
       article.innerHTML = "${objArticulos.titulo}";
       <button>Eliminar</button>`;
        console.log(article);

        pre.appendChild(code)
        article.appendChild(pre);

        article.querySelector("button").onclick = function () {
            if(confirm(`Desea eliminar este articulo ${article.textContent}`)) article.remove();
        }

        body.appendChild(article);

    }
}

ejm3();