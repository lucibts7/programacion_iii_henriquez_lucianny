console.log(document)
const titulo = document.getElementById("titulo")
console.log(titulo)
titulo.textContent = "Laboratorio Interdimensional"

const estado = document.getElementById("estado")
const boton = document.getElementById("botonPortal")
boton.addEventListener("click", function(){
    console.log("Ejecutando click")
    estado.textContent ="¡Portal Activado!";
    console.log("Texto cambiado en el elemento estado")
    alert("Proceso de Activación del Portal Terminado")
});

const botonDos = document.getElementById("boton")
botonDos.addEventListener("click", function(){
    mensaje.textContent="¡Morty, listo para la aventura!"
})

let viajes = 0;
const contador = document.getElementById("contador")
const nuevoViaje = document.getElementById("nuevoViaje")
nuevoViaje.addEventListener("click", function(){
    viajes+=1;
    contador.textContent=viajes;
})