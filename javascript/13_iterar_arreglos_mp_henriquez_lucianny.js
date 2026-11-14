let espacios = [30, 50, 70, 40];
let posicion = 2;
let nuevaCantidad = 100;

for (let i=0; i<espacios.length; i++){
    console.log("Posición ", i);
    console.log("Espacios disponibles: ", espacios[i]);
    if(posicion>=0 && posicion<espacios.length){
        espacios[posicion]=nuevaCantidad;
    }else{
        console.log("Posición no válida");
    }
}
console.log(espacios);

let vehiculos = [
    { id: 1, nombre: "Carlos", espacios: 99, edad: 30},
    { id: 2, nombre: "Valeria", espacios: 80, edad: 24},
    { id: 3, nombre: "Lucy", espacios: 90, edad: 21},
]

for (let vehiculo of vehiculos){
    console.log("ID: ", vehiculo.id);
    console.log("Nombre del propietario: ", vehiculo.nombre);
    console.log("Espacios: ", vehiculo["espacios"]);
    console.log("Edad: ", vehiculo["edad"]);
}

console.log("El estacionamiento organiza sus registros");
registros = [
    {
        propietario:"Carlos",
        espacios: [30, 50, 60]
    },
    {
        propietario:"Valeria",
        espacios: [20, 30, 30]
    },
    {
        propietario:"Summer",
        espacios: [90, 80, 70]
    },
];

for(let registro of registros){
    totalEspacios=0;
    console.log("Propietario: ", registro.propietario)
    for (let espacio of registro.espacios){
        console.log("Espacios registrados", espacio);
        totalEspacios+=espacio;
    }
    console.log("Total de espacios registrados por ", registro.propietario, " son : ", totalEspacios);
}

let espaciosOriginales = [30, 50, 70, 40];
let espaciosDobles = espaciosOriginales.map(elemento=>{
    return elemento * 2;
});
console.log(espaciosDobles);

let validos = espaciosOriginales.filter(espacio=>espacio>=50);
let resultado = espaciosOriginales.reduce((acumulador, elemento)=>{
    return acumulador+elemento;
});