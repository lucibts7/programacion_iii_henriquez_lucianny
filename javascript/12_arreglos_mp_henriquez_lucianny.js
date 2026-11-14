let vehiculos = ["Automóvil", "Motocicleta", "Camioneta", "Bicicleta", "Bus", "Camión"];
console.log("Elemento 0", vehiculos[0]);
console.log("Elemento 2", vehiculos[2]);
console.log("Elemento 5", vehiculos[5]);
console.log("Elemento 4", vehiculos[4]);
console.log("Tamaño del arreglo", vehiculos.length);

console.log("Vehículos: ", vehiculos);
console.log("Incluir elementos a un arreglo con Push");
vehiculos.push("Furgoneta");
console.log("Vehículos: ", vehiculos);
vehiculos.unshift("Taxi");
console.log("Vehículos: ", vehiculos);

console.log("Modificar elementos a un arreglo");
vehiculos[0] = "Automóvil particular";
console.log("Vehículos: ", vehiculos);

console.log("Eliminar un elemento del arreglo: ")
vehiculos.pop();
vehiculos.pop(3);
console.log("Vehículos: ", vehiculos);
vehiculos.shift();
console.log("Vehículos: ", vehiculos);
vehiculos.splice(1,1);
console.log("Vehículos : " + vehiculos);