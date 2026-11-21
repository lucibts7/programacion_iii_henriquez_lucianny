console.log(document)
const titulo = document.getElementById("titulo")
console.log(titulo)
titulo.textContent = "Estacionamiento Digital"

const estado = document.getElementById("estado")
const boton = document.getElementById("botonEstacionamiento")
boton.addEventListener("click", function(){
    console.log("Ejecutando click")
    estado.textContent ="¡Estacionamiento Abierto!";
    console.log("Texto cambiado en el elemento estado")
    alert("Proceso de apertura del estacionamiento terminado")
});

const botonDos = document.getElementById("boton")
botonDos.addEventListener("click", function(){
    mensaje.textContent="¡Bienvenido a Estacionamiento Digital!"
})

let viajes = 0;
const contador = document.getElementById("contador")
const nuevoVehiculo = document.getElementById("nuevoVehiculo")
nuevoVehiculo.addEventListener("click", function(){
    viajes+=1;
    contador.textContent=viajes;
})