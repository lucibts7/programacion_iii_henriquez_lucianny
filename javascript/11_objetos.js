let nombre = "Rick";
let edad = 70;
let planeta = "Tierra C-137";
let energia = 100;
let averiada = false;

let nave = {
    nombre: "Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averiada: false
}

console.log("Información de la nave de Rick:");
console.log("Nombre del Piloto: " + nave.nombre);
console.log("Edad del Piloto: " + nave["edad"]);
console.log("Planeta de Origen: " + nave["planeta"]);
console.log("Nivel de energía: " + nave.energia + "%");
console.log("Estado de la nave: " + (nave.averiada ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a la nave de Rick");
nave.modelo = "Nave Espacial X-2000";
console.log("Modelo de la nave: " + nave.modelo);
nave["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros: " + nave["capacidadPasajeros"]);
console.log("Nave de Rick", nave);
console.log("Actualizar el nivel de energía de la nave de Rick");
nave.energia=80;
console.log("Nuevo nivel de energía: " + nave.energia + "%");
nave["averiada"] = true;
console.log("Nuevo estado de la nave: " + (nave.averiada ? "Averiada" : "Operativa"));
console.log("Nave de Rick", nave);
console.log("Eliminar una propiedad de la nave de Rick");
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada.");
console.log("Nave de Rick", nave);

console.log("Recorrer las propiedades de la nave de Rick");
for(let propiedad in nave){
    console.log(propiedad + ": " + nave[propiedad]);
}

/*Rick tiene varios productos en su laboratorio. Necesita calcular cuántas unidades tiene en total:*/ 
productos = {
    cristales: 40,
    pistolas: 5,
    universos: 17
}

let totalUnidades = 0;
for(let objetos in productos){
    totalUnidades += productos[objetos];
    console.log("Total de productos: " + totalUnidades);
}