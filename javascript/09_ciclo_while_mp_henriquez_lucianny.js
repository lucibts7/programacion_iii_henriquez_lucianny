console.log("Abriendo accesos del estacionamiento...");
let acceso = 1;
while (acceso <= 5) {
    console.log("Abriendo acceso:", acceso);
    acceso++;
}
console.log("Todos los accesos abiertos. ¡Listos para recibir vehículos!");

console.log("Cuenta regresiva para abrir el estacionamiento");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para abrir el estacionamiento");
    i--;
}

console.log("Recargar espacios disponibles del estacionamiento");
let espacios = 50;
let recarga = 10;
let totalRecargas = 0;
while (espacios < 100) {
    espacios += recarga;
    totalRecargas++;
    console.log("Habilitando espacios... Cantidad disponible:", espacios, "%");
}
console.log("Estacionamiento completamente habilitado después de", totalRecargas, "recargas.");

console.log("Consumo de espacios del estacionamiento");
let espaciosDisponibles = 100;
let ocupacionPorVehiculo = 45;
let vehiculosIngresados = 0;
while (espaciosDisponibles >= ocupacionPorVehiculo) {
    espaciosDisponibles -= ocupacionPorVehiculo;
    vehiculosIngresados++;
    console.log("Vehículo", vehiculosIngresados, "ingresado. Espacios restantes:", espaciosDisponibles, "%");
    if (espaciosDisponibles < 50) {
        console.log("Advertencia: Pocos espacios disponibles. Cantidad actual:", espaciosDisponibles, "%");
    }
}
console.log("No hay suficientes espacios para otro vehículo. Total de vehículos ingresados:", vehiculosIngresados);

console.log("Activar sistema de seguridad con Do ... While");
let energiaSistema = 50;
do {
    console.log("Activando sistema de seguridad. Nivel de energía:", energiaSistema, "%");
    energiaSistema -= 15;
} while (energiaSistema > 0);
console.log("No hay suficiente energía para activar el sistema. Nivel de energía actual:", energiaSistema, "%");

console.log("Ahorrar para ampliar el estacionamiento");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana", semanas, "Ahorro actual:", ahorro, "unidades");
} while (ahorro < meta);
console.log("Meta alcanzada después de", semanas, "semanas. Ahorro total:", ahorro, "unidades.");