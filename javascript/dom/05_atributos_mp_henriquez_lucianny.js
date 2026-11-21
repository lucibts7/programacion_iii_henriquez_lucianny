const vehiculo = document.getElementById("vehiculo");
const cambiar = document.getElementById("cambiar");
const verVehiculo = document.getElementById ("verVehiculo");
const tipo = document.getElementById("tipo")

cambiar.addEventListener("click", function(){
    if(vehiculo.getAttribute("title")==="Automóvil"){
        vehiculo.setAttribute("src", "motocicleta.webp");
        vehiculo.setAttribute("title", "Motocicleta");
        vehiculo.dataset.tipo = "Motocicleta";
        tipo.textContent = vehiculo.dataset.tipo;
    } else {
        vehiculo.setAttribute("src", "automovil.png");
        vehiculo.setAttribute("title", "Automóvil");
        vehiculo.dataset.tipo = "Automóvil particular";
        tipo.textContent = vehiculo.dataset.tipo;
    }

});

verVehiculo.addEventListener("click", function(){
    tipo.textContent = vehiculo.dataset.tipo;
})

const id= document.getElementById("espacio");
const activarespacio = document.getElementById("activarespacio");

activarespacio.addEventListener("click", function(){
    if (espacio.textContent=="Espacio Disponible"){
        espacio.style.backgroundColor = "#8b5cf6";
        espacio.style.color = "white";
        espacio.style.borderRadius = "8px";
        espacio.textContent=("Espacio Ocupado");
    } else {
    espacio.style.backgroundColor = "#c084fc";
    espacio.style.color = "white";
    espacio.textContent=("Espacio Disponible");
    }
})