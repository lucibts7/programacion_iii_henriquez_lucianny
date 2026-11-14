console.log("Estacionamiento Digital: Funciones en Javascript");

function abrirEstacionamiento() {
    console.log("Estacionamiento abierto. ¡Bienvenido!");
}

abrirEstacionamiento();
abrirEstacionamiento();
abrirEstacionamiento();
abrirEstacionamiento();

function registrarVehiculo(nombre) {
    console.log("El propietario " + nombre + " ha registrado su vehículo");
}

registrarVehiculo("Carlos");
registrarVehiculo("Valeria");

function actualizarEspacios(espaciosActuales, nuevosEspacios) {
    let espaciosTotales = espaciosActuales + nuevosEspacios;
    if (espaciosTotales > 100) {
        espaciosTotales = 100;
    }
    console.log("Espacios disponibles actualizados. Cantidad: " + espaciosTotales);
    return espaciosTotales;
}

let espaciosEstacionamiento = 50;
espaciosEstacionamiento = actualizarEspacios(espaciosEstacionamiento, 30);
espaciosEstacionamiento = actualizarEspacios(espaciosEstacionamiento, 40);

console.log("Calcular descuentos en las tarifas");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

let precioOriginal = 10;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio Original: " + precioOriginal + " , Precio con Descuento: " + precioConDescuento);

function evaluarPagoEstacionamiento(tarifa, correctas, totalPreguntas) {
    let porcentajesCorrectas = (correctas / totalPreguntas) * 100;
    if (tarifa < 20) {
        console.log("Advertencia: Tarifa baja. Valor actual: $" + tarifa);
    }
    if (porcentajesCorrectas >= 70) {
        console.log("¡Felicidades! Has aprobado el examen con un " + porcentajesCorrectas + "% de respuestas correctas")
    } else {
        console.log("lo siento, has reprobado el examen con un " + porcentajesCorrectas + "% de respuestas correctas")
    }
}

evaluarPagoEstacionamiento(15, 8, 10);
evaluarPagoEstacionamiento(15, 8, 10);

function espaciosDisponibles (espacios) {
    for (let estacionamiento of espacios) {
        if (estacionamiento >= 50) {
            console.log("Espacios disponibles: " + estacionamiento);
        }
    }
}

let espacios = [20, 30, 40, 100, 50, 60];
espaciosDisponibles(espacios);