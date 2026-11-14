let nombre = "Carlos";
let edad = 30;
let estacionamiento = "Estacionamiento Central";
let espacios = 100;
let ocupado = false;

let vehiculo = {
    nombre: "Carlos",
    edad: 30,
    estacionamiento: "Estacionamiento Central",
    espacios: 100,
    ocupado: false
}

console.log("Información del vehículo de Carlos:");
console.log("Nombre del propietario: " + vehiculo.nombre);
console.log("Edad del propietario: " + vehiculo["edad"]);
console.log("Estacionamiento: " + vehiculo["estacionamiento"]);
console.log("Espacios disponibles: " + vehiculo.espacios);
console.log("Estado del espacio: " + (vehiculo.ocupado ? "Ocupado" : "Disponible"));

console.log("Agregar una nueva propiedad al vehículo de Carlos");
vehiculo.modelo = "Toyota Corolla";
console.log("Modelo del vehículo: " + vehiculo.modelo);
vehiculo["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros: " + vehiculo["capacidadPasajeros"]);
console.log("Vehículo de Carlos", vehiculo);

console.log("Actualizar la cantidad de espacios disponibles");
vehiculo.espacios = 80;
console.log("Nuevos espacios disponibles: " + vehiculo.espacios);
vehiculo["ocupado"] = true;
console.log("Nuevo estado del espacio: " + (vehiculo.ocupado ? "Ocupado" : "Disponible"));
console.log("Vehículo de Carlos", vehiculo);

console.log("Eliminar una propiedad del vehículo de Carlos");
delete vehiculo.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada.");
console.log("Vehículo de Carlos", vehiculo);

console.log("Recorrer las propiedades del vehículo de Carlos");
for(let propiedad in vehiculo){
    console.log(propiedad + ": " + vehiculo[propiedad]);
}

productos = {
    automoviles: 40,
    motocicletas: 5,
    camionetas: 17
}

let totalUnidades = 0;
for(let objetos in productos){
    totalUnidades += productos[objetos];
    console.log("Total de vehículos registrados: " + totalUnidades);
}