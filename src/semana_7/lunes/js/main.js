//SERIVCIO con FETCH
fetch("https://61ef3d12d593d20017dbb397.mockapi.io/user")
.then((res)=>{
    console.log("Recepción del servidor: ", res);
   // console.log(res.json());
   return res.json();
}).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.error("error: ", error)
})