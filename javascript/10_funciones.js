console.log("Rick y Morthy: Funciones en Javascript");

function abrirPortal() {
    console.log("Portal abierto. ¡Vamos a otra dimensión!")
}

abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();

function  pilotoNave(nombre) {
    console.log("El piloto " + nombre + " está a bordo de la nave");
}

pilotoNave("Rick");
pilotoNave("Morty");


function recargarPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Pistola de portales recargada. Nivel de energía: " + energiaTotal + "%");
    return energiaTotal;
}
let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30);
energiaPistola = recargarPistola(energiaPistola, 40);

console.log("Calcular descuentos interdimensionales");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio Original: " + precioOriginal + " , Precio con Descuento: " + precioConDescuento);

function evaluarCombustibleExamen(combustible, correctas, totalPreguntas) {
    let porcentajesCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
    if (porcentajesCorrectas >= 70) {
        console.log("¡Felicidades! Has aprobado el examen con un " + porcentajesCorrectas +"% de respuestas correctas")
    } else {
        console.log("lo siento, has reprobado el examen con un " + porcentajesCorrectas + "% de respuestas correctas")    
    }
}
evaluarCombustibleExamen(15,8,10);
evaluarCombustibleExamen(15,8,10);

function misionExitosa (cristales){
    for (let misiones of cristales) {
        if (misiones >= 50) {
            console.log("Misiones exitosas: " + misiones);
        }      
    }    
}   

let cristales = [20,30,40,100,50,60];
misionExitosa(cristales);

