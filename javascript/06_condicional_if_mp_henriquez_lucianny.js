console.log("Condicional if - Estacionamiento Digital");
let espaciosDisponibles = 50;

console.log("Condicional Simple If - Estacionamiento Digital");
if (espaciosDisponibles > 0) {
    console.log("Hay espacios disponibles en el estacionamiento.");
}

console.log("Condicional If-Else dos caminos - Estacionamiento Digital");
let vehiculosRegistrados = 300;
if (vehiculosRegistrados > 0) {
    console.log("Hay vehículos registrados en el estacionamiento.");
} else {
    console.log("No hay vehículos registrados en el estacionamiento.");
}

console.log("Condicional If-Else If múltiples caminos - Estacionamiento Digital");
let zona = "A";
if (zona === "A") {
    console.log("Estás en la zona A del estacionamiento.");
} else if (zona === "B") {
    console.log("Estás en la zona B del estacionamiento.");
} else {
    console.log("Estás en una zona desconocida.");
}

console.log("Condicional If anidado - Estacionamiento Digital");
let espaciosDisponibles2 = 50;
let vehiculosRegistrados2 = 400;
if (espaciosDisponibles2 > 0) {
    if (vehiculosRegistrados2 > 0) {
        console.log("Hay espacios disponibles y vehículos registrados.");
    } else {
        console.log("No hay vehículos registrados.");
    }
}

console.log("Condicional If con operador lógico - Estacionamiento Digital");
let espaciosDisponibles3 = 50;
let vehiculosRegistrados3 = 400;
if (espaciosDisponibles3 > 0 && vehiculosRegistrados3 > 0) {
    console.log("El estacionamiento tiene espacios disponibles y vehículos registrados.");
} else {
    console.log("No hay suficientes espacios o vehículos registrados.");
}

console.log("Control de ingreso al estacionamiento ");
let espaciosDisponibles4 = 400;
let seguridadDisponible = 50;
let pagoConfirmado = "no";
let reservaConfirmada = "no";
let estacionamientoCerrado = "no";

if (espaciosDisponibles4 >= 50 &&
seguridadDisponible >= 50 &&
(pagoConfirmado === "si" ||
reservaConfirmada === "si") &&
!(estacionamientoCerrado === "si"))
{
    console.log("Ingreso Autorizado");
} else {
    if (espaciosDisponibles4 <= 50)
    {
        console.log("No puedes ingresar, no hay suficientes espacios disponibles");
    }
    if (seguridadDisponible <= 50)
    {
        console.log("No puedes ingresar, el servicio de seguridad no está disponible");
    }
    if (pagoConfirmado === "no")
    {
        console.log("No puedes ingresar, el pago no está confirmado");
    }
    if (reservaConfirmada === "no")
    {
        console.log("No puedes ingresar, la reserva no está confirmada");
    }
    if (estacionamientoCerrado === "si")
    {
        console.log("No puedes ingresar, el estacionamiento está cerrado");
    }
    if (pagoConfirmado === "no" && reservaConfirmada === "no")
    {
        console.log("No puedes ingresar, ni el pago ni la reserva están confirmados");
    }
}

console.log("Jornada de estacionamiento");
let vehiculosObjetivo = 200;
let vehiculosIngresados = 150;
let espaciosIniciales = 1000;
let espaciosOcupados = 850;
let vehiculoDanado = "si";
let sistemaAveriado = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (vehiculosIngresados / vehiculosObjetivo) * 100;
let espaciosRestantes = espaciosIniciales - espaciosOcupados;
console.log("RESULTADOS DE LA JORNADA");
if (porcentajeCumplimiento >= 90) {
    console.log("Jornada cumplida con éxito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Jornada cumplida parcialmente");
} else if (porcentajeCumplimiento <= 50 && porcentajeCumplimiento < 70) {
    console.log("Jornada regular, no se cumplió con el objetivo");
} else {
    console.log("Jornada fallida, no se alcanzó el objetivo");
}

console.log("Evaluación de bonificación por desempeño");
if (porcentajeCumplimiento >= 90 && espaciosRestantes >= 200) {
    bonificacion = 1000;
    console.log("Bonificación por desempeño excelente");
} else {
    console.log("No se otorga bonificación");
}

console.log("Salida segura del estacionamiento");
if (vehiculoDanado === "no" && sistemaAveriado === "no") {
    console.log("Salida segura del estacionamiento");
} else if (vehiculoDanado === "si" && sistemaAveriado === "no") {
    console.log("Salida segura del estacionamiento, pero el vehículo está dañado");
} else if (vehiculoDanado === "no" && sistemaAveriado === "si") {
    console.log("Salida segura del estacionamiento, pero el sistema está averiado");
} else {
    console.log("Salida insegura, el vehículo está dañado y el sistema está averiado");
}

console.log("Resumen de la jornada");
console.log("Vehículos objetivo: " + vehiculosObjetivo);
console.log("Vehículos ingresados: " + vehiculosIngresados);
console.log("Porcentaje de cumplimiento: " + porcentajeCumplimiento.toFixed(2) + "%");
console.log("Espacios iniciales: " + espaciosIniciales);
console.log("Espacios ocupados: " + espaciosOcupados);
console.log("Espacios restantes: " + espaciosRestantes);
console.log("Vehículo dañado: " + vehiculoDanado);
console.log("Sistema averiado: " + sistemaAveriado);
console.log("Bonificación obtenida: " + bonificacion);