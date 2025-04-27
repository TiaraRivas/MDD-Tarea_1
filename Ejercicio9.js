function esperarMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola, soy Tiara y pasaron 2 segundos")
        },2000)
    });
}

async function mostrarMensaje(){
    const mensaje = await esperarMensaje();
    console.log(mensaje);
}


mostrarMensaje();


