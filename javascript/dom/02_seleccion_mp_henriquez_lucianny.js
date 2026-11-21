const estacionamiento = document.getElementById("estacionamiento");
const espacios = document.getElementById("espacios");
const estado = document.getElementById("estado");

estacionamiento.textContent="Estacionamiento Digital";
espacios.textContent="Espacios disponibles: 100";
estado.textContent="Estacionamiento: Abierto";

const vehiculo = document.querySelector(".vehiculo");
vehiculo.textContent="Automóvil particular";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent="Registro de Vehículos";

const pendiente = document.querySelector("#pendiente");
pendiente.textContent="Control de Estacionamiento";

const estadoregistrado = document
            .querySelector("#registrado .estado");
estadoregistrado.textContent="Vehículo Registrado";

const tipos = document
                .querySelectorAll(".tipos")
console.log(tipos)
console.log(tipos.length)

console.log(tipos[0].textContent);
console.log(tipos[1].textContent);
console.log(tipos[2].textContent);
console.log(tipos[3].textContent);
console.log(tipos[4].textContent);
console.log(tipos[5].textContent);

console.log("Recorrer a través del for");
for(let i=0; i<tipos.length; i++){
    console.log(tipos[i].textContent)
}
console.log("Con ForEach")
tipos.forEach(function(planeta){
    console.log(planeta.textContent);
});

console.log("Con For of")
for (let planeta of tipos){
    console.log(planeta.textContent);
}