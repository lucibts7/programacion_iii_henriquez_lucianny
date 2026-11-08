console.log("Ciclo for");
for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

console.log("Cuenta regresiva para abrir el estacionamiento");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " segundos para abrir el estacionamiento");
}
console.log("Cuenta regresiva para abrir el estacionamiento con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Estacionamiento abierto!");
    } else {
        console.log("Faltan " + i + " segundos para abrir el estacionamiento");
    }
}

console.log("Nivel de ocupación del estacionamiento");
let ocupacion = 50;
for (let i = 0; i <= 100; i += 10) {
    if (ocupacion >= i) {
        console.log("Nivel de ocupación:", ocupacion);
    }
}

const consumoPorVehiculo = 10;
let totalConsumido = 0;
for (let vehiculo = 1; vehiculo <= 5; vehiculo++) {
    totalConsumido += consumoPorVehiculo;
    console.log("Vehículo", vehiculo);
    console.log("Total consumido hasta ahora:", totalConsumido, "unidades de combustible");
}
console.log("Total consumido " + totalConsumido + " unidades.");

console.log("Promedio de vehículos ingresados:");
let totalVehiculos = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let vehiculos = dia * 5 + 5;
    totalVehiculos += vehiculos;
    console.log("Día", dia, ":", vehiculos, "vehículos ingresados");
}
console.log("Total de vehículos ingresados:", totalVehiculos);
console.log("Promedio de vehículos:" + (totalVehiculos / dias).toFixed(2));

console.log("Zonas del estacionamiento");
let disponibles = 0;
let ocupadas = 0;
for (let zona = 1; zona <= 10; zona++) {
    if (zona % 2 === 0) {
        console.log("Zona", zona, "está ocupada");
        ocupadas++;
    } else {
        console.log("Zona", zona, "está disponible");
        disponibles++;
    }
}
console.log("Total de zonas disponibles:", disponibles);
console.log("Total de zonas ocupadas:", ocupadas);

console.log("Registro de vehículos del estacionamiento");
let vehiculos = [35, 60, 45, 80, 70, 90, 55];
let total = 0;
let ingresosExitosos = 0;
for (let i = 0; i < vehiculos.length; i++) {
    total += vehiculos[i];
    console.log("Registro " + (i + 1), ":", vehiculos[i], "vehículos registrados");
    if (vehiculos[i] >= 50) {
        ingresosExitosos++;
    } else {
        console.log("Registro " + (i + 1) + " no fue exitoso");
    }
}
console.log("Total de vehículos registrados:", total);
console.log("Registros exitosos:", ingresosExitosos);

console.log("Recorrer vehículos registrados con for ..of");
for (let vehiculo of vehiculos) {
    if (vehiculo < 50) {
        console.log("Vehículos:", vehiculo, "no alcanzaron el objetivo");
    }
}

console.log("Recorrer tipos de vehículos con for ..of");
const tiposVehiculo = ["Automóvil", "Motocicleta", "Camioneta", "Bus", "Bicicleta"];
for (let tipo of tiposVehiculo) {
    console.log("Tipo de vehículo:", tipo);
}

let estacionamiento = {
    nombre: "Estacionamiento Digital",
    capacidad: 1000,
    tarifa: 500,
    servicios: ["Seguridad", "Vigilancia", "Lavado"],
};

console.log("Recorrer propiedades del estacionamiento con for ..in");
for (let propiedad in estacionamiento) {
    console.log(propiedad + ":", estacionamiento[propiedad]);
    if (propiedad === "servicios") {
        console.log("Servicios del estacionamiento:");
        for (let servicio of estacionamiento[propiedad]) {
            console.log("-", servicio);
        }
    }
}

let registros = [
    { nombre: "Registro 1", vehiculos: 90, meta: 100, zona: "A" },
    { nombre: "Registro 2", vehiculos: 40, meta: 50, zona: "B" },
    { nombre: "Registro 3", vehiculos: 120, meta: 100, zona: "C" }
];

let exitosos = 0;
for (let registro of registros) {
    let porcentaje = (registro.vehiculos / registro.meta) * 100;
    console.log(registro.nombre + " completado en la zona " + registro.zona + " con un " + porcentaje.toFixed(2) + "% de la meta alcanzada");
    if (porcentaje >= 90) {
        exitosos++;
    } else {
        console.log(registro.nombre + " no fue exitoso");
    }
}
console.log("Total de registros exitosos:", exitosos);

console.log("Uso de break y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el número 5, se detiene el ciclo");
        break;
    }
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Se encontró un número par, se continúa el ciclo");
        continue;
    }
    console.log("Número impar:", i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontró el número 7, se detiene el ciclo");
        break;
    }
    if (i % 2 === 0) {
        console.log("Se encontró un número par, se continúa el ciclo");
        continue;
    }
    console.log("Número impar:", i);
}