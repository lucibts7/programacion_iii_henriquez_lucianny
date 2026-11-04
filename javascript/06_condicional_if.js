console.log("Condicional if");
let energia = 50;

console.log("Condicional Simple If");
if (energia > 0) {
    console.log("Tienes energia suficiente para continuar.");
}

console.log("Condicional If-Else dos caminos");
let combustible = 300;
if (combustible > 0) {
    console.log("Tienes combustible suficiente para continuar.");
} else {
    console.log("No tienes combustible suficiente para continuar.");
}

console.log("Condicional If-Else If múltiples caminos");
let dimension = "C-137"; // Simulando la entrada del usuario
if (dimension === "C-137") {
    console.log("Estas en tu dimensión original.");
} else if (dimension === "C-140") {
    console.log("Estas en una dimensión alternativa.");
} else {
    console.log("Estás en una dimensión desconocida.");
}

console.log("Condicional If anidado");
let energia2 = 50;
let combustible2 = 400;
if (energia2 > 0) {
    if (combustible2 > 0) {
        console.log("Tienes energía y combustible suficiente para continuar.");
    } else {
        console.log("No tienes combustible suficiente para continuar.");
    }
}

console.log("Condicional If con operador lógico");
let energia3 = 50;
let combustible3 = 400;
if (energia3 > 0 && combustible3 > 0) {
    console.log("Tienes energía y combustible suficiente para continuar.");
} else {
    console.log("No tienes suficiente energía o combustible para continuar.");
}

console.log("Control de viajes interdimensionales");
let combustible4 = 400;
let energia4 = 50;
let rick_disponible = "no";
let summer_disponible = "no";
let nave_averiada = "no";

if (combustible4 >= 50 && 
energia4 >= 50 &&
(rick_disponible === "si" ||
summer_disponible === "si") &&
!(nave_averiada === "si")) 
{
    console.log("Viaje Autorizado");
} else {
    if (combustible4 <= 50) 
    {
        console.log("no puedes viajar a otra dimension, Rick no está disponible");
    }
    if (energia4 <= 50) 
    {
        console.log("no puedes viajar a otra dimension, Rick no está disponible");
    }
    if (rick_disponible === "no") 
    {
        console.log("no puedes viajar a otra dimension, Rick no está disponible");
    }
    if (summer_disponible === "no") 
    {
        console.log("no puedes viajar a otra dimension, Summer no está disponible");
    }
    if (nave_averiada === "si") 
    {
        console.log("no puedes viajar a otra dimension, Rick no está disponible");
    }
    if (rick_disponible === "no" && summer_disponible === "no") 
    {
        console.log("no puedes viajar a otra dimension, ni Rick ni Summer están disponibles");
    }     
}

console.log("Misión interdimensional");
let cristalesObjetivos = 200;
let cristalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 850;
let morthyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;
console.log("RESULTADOS DE LA MISION");
if (porcentajeCumplimiento >= 90) {
    console.log("Misión Cumplida con exito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Misión Cumplida Parcialmente");
} else if (porcentajeCumplimiento <= 50 && porcentajeCumplimiento < 70) {
    console.log("Misión regular, no se cumplió con el objetivo");
} else {
    console.log("Misión fallida, Peligro de extinción ");    
}    

console.log("Evaluacion de bonificacion por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación por desempeño excelente");
} else {
    console.log("No se otorga bonificación");
}

console.log("regreso seguro a la dimension original");
if (morthyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimension original");
} else if (morthyHerido === "si" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimension original, pero Morthy está herido");
} else if (morthyHerido === "no" && naveAveriada === "si") {
    console.log("Regreso seguro a la dimension original, pero la nave está averiada");
} else {
    console.log("Regreso inseguro a la dimension original, Morthy está herido y la nave está averiada");
}

console.log("Resumen de la misión");
console.log("Cristales objetivos: " + cristalesObjetivos);
console.log("Cristales recolectados: " + cristalesRecolectados);
console.log("Porcentaje de cumplimiento: " + porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible restante: " + combustibleInicial);
console.log("Combustible consumido: " + combustibleConsumido);
console.log("Combustible restante: " + combustibleRestante);
console.log("Morthy herido: " + morthyHerido);
console.log("Nave averiada: " + naveAveriada);
console.log("Bonificación obtenida: " + bonificacion);