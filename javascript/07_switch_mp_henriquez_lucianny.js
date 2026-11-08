let zona = "A";
switch (zona) {
    case "A":
        console.log("Estás en la zona A del estacionamiento");
        break;
    case "B":
        console.log("Estás en la zona B del estacionamiento");
        break;
    case "C":
        console.log("Estás en la zona C del estacionamiento");
        break;
    case "D":
        console.log("Estás en la zona de Lucianny Henriquez");
        break;
    default:
        console.log("Estás en una zona desconocida");
}

let tipoVehiculo = "Automóvil";
switch (tipoVehiculo) {
    case "Automóvil":
    case "Motocicleta":
        console.log("Vehículo autorizado para ingresar");
        break;
    case "Camioneta":
        console.log("Ingreso autorizado para camioneta");
        break;
    default:
        console.log("Tipo de vehículo desconocido");
}

let ocupacion = 50;
switch (true) {
    case ocupacion > 0 && ocupacion <= 25:
        console.log("El estacionamiento tiene poca ocupación");
        break;
    case ocupacion > 25 && ocupacion <= 50:
        console.log("El estacionamiento tiene ocupación suficiente");
        break;
    case ocupacion > 50 && ocupacion <= 75:
        console.log("El estacionamiento tiene buena ocupación");
        break;
    case ocupacion > 75 && ocupacion <= 100:
        console.log("El estacionamiento está casi lleno");
        break;
    default:
        console.log("Nivel de ocupación desconocido");
}

console.log("Calculadora");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("El resultado de la suma es:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("El resultado de la resta es:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("El resultado de la multiplicación es:", resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("El resultado de la división es:", resultado
            );
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación desconocida");
}

if (resultado !== undefined) {
    console.log("El resultado de la operación es:", operacion, ":", resultado);
}