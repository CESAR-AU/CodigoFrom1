function practica() {
    const  getDatauser = () => {
        let objDataUser = {
            nombre: document.getElementById("nombre"),
            apellidos: document.getElementById("apellidos"),
            edad: document.getElementById("edad"),
            pais: document.getElementById("pais"),
            url_img: document.getElementById("urlImg"),
            correo: document.getElementById("correo"),
            comentarios: document.getElementById("comentarios"),
        }
        return objDataUser;
    }

    function crearUsuario(event) {
        event.preventDefault();
        let objDataUser = getDatauser();
        //Validaciones
        if(objDataUser.nombre.value == "") {objDataUser.nombre.classList.add("is-invalid"); return;}
        else objDataUser.nombre.classList.remove("is-invalid")

        if(objDataUser.apellidos.value == "") {objDataUser.apellidos.classList.add("is-invalid"); return;}
        else objDataUser.apellidos.classList.remove("is-invalid")

        if(objDataUser.edad.value == "") {objDataUser.edad.classList.add("is-invalid"); return;}
        else objDataUser.edad.classList.remove("is-invalid")

        if(objDataUser.pais.value == "") {objDataUser.pais.classList.add("is-invalid"); return;}
        else objDataUser.pais.classList.remove("is-invalid")

        if(objDataUser.url_img.value == "") {objDataUser.url_img.classList.add("is-invalid"); return;}
        else objDataUser.url_img.classList.remove("is-invalid")

        if(objDataUser.correo.value == "") {objDataUser.correo.classList.add("is-invalid"); return;}
        else objDataUser.correo.classList.remove("is-invalid")

        addCard(objDataUser);
        console.log(objDataUser);
    }

    function addCard(dataUser){
        const app = document.getElementById("app");
        
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card text-center m-3" style="width: 18rem;">
        <div class="d-flex flex-row-reverse bd-highlight" style="position: relative;">
            <button class=" bd-highlight rounded-circle btn btn-danger" style="position: absolute; right: -10px; top: -20px;">X</button>
        </div>
        <div class="py-4">
            <img src="https://picsum.photos/100/100" class="rounded-circle" width="150px">
        </div>
        <div class="card-body">
          <h2 class="card-title h3"><b>${dataUser.nombre.value} ${dataUser.apellidos.value}</b></h2>
          <p class="card-text my-0"><b>Edad: </b> <span class="text-success">${dataUser.edad.value} </span> </p>
          <p class="card-text my-0"><b>Email: </b> <span class="text-success">${dataUser.correo.value}</span> </p>
          <p class="card-text my-0"><b>Pais: </b> <span class="text-success">${dataUser.pais.value}</span> </p>
          <article>${dataUser.comentarios.value}</article>
        </div>
        </div>`;
        card.querySelector("button").onclick = function(){
            if(confirm(`Desea eliminar al usuario seleccionado: ${dataUser.nombre.value}?`)) card.remove();
        };

        if(app.querySelectorAll("article").length%2 == 0) card.classList.add("col");

        app.appendChild(card);

        dataUser.nombre.value = "";
        dataUser.apellidos.value = "";
        dataUser.edad.value = "";
        dataUser.pais.value = "";
        dataUser.url_img.value = "";
        dataUser.correo.value = "";
        dataUser.comentarios.value = "";
    }

    //
    const btnCrear = document.getElementById("crear").onclick = crearUsuario;
};

practica();