let personajes = ["Rick", "Morty", "Summer", "Jerry", "Lucianny", "Henriquez"];
console.log("Elemento 0", personajes[0]);
console.log("Elemento 2", personajes[2]);
console.log("Elemento 5", personajes[5]);
console.log("Elemento 4", personajes[4]);
console.log("Tamaño del arreglo", personajes.length);

console.log("Personajes: ", personajes);
console.log("Incluir elementos a un arreglo con Push");
personajes.push("Castellanos");
console.log("Personajes: ", personajes);
personajes.unshift("Vale");
console.log("Personajes: ", personajes);
console.log("Modificar elementos a un arreglo");
personajes[0]="Valeria";
console.log("Personajes: ", personajes);
console.log("Eliminar un elemento del arreglo: ")
personajes.pop();//elimina el último
personajes.pop(3); //elimina esa posición
console.log("Personajes: ", personajes);
personajes.shift(); //elimina el primero
console.log("Personajes: ", personajes);
personajes.splice(1,1); //elimina un rango
console.log("Personajes : " + personajes);