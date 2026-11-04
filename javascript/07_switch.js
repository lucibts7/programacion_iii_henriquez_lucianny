let dimension = 4;
switch (dimension) {
    case 1:
        console.log("Estas en la dimension C-137");
        break;
    case 2:
        console.log("Estas en la dimension C-140");
        break;
    case 3:
        console.log("Estas en la dimension C-500");
        break;
    case 4:
        console.log("Dimension Lucianny Henriquez");
        break;
    default:
        console.log("Estas en una dimension desconocida");
}

let personaje = "Rick";
switch (personaje) {
    case "Rick":
    case "Morty":
        console.log("Hola Morty o Rick");
        break;
    case "Summer":
        console.log("Hola Summer");
        break;
    default:
        console.log("Personaje desconocido");
}

let energia = 50;
switch (true) {
    case energia > 0 && energia <= 25:
        console.log("Tienes poca energia");
        break;
    case energia > 25 && energia <= 50:
        console.log("Tienes energia suficiente");
        break;
    case energia > 50 && energia <= 75:
        console.log("Tienes buena energia");
        break;
    case energia > 75 && energia <= 100:
        console.log("Tienes mucha energia");
        break;
    default:
        console.log("Energia desconocida");
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