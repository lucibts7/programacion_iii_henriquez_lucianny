console.log("Operadores Aritméticos - Estacionamiento Digital");
let espaciosDisponibles = 15;
let nuevosEspacios = 10;

console.log("Espacios disponibles después de agregar nuevos espacios: ", espaciosDisponibles + nuevosEspacios);
console.log("Espacios disponibles después de ocupar 5 espacios: ", espaciosDisponibles - nuevosEspacios);
console.log("Cantidad de espacios en 5 estacionamientos: ", espaciosDisponibles * nuevosEspacios);
console.log("Vehículos por estacionamiento: ", espaciosDisponibles / nuevosEspacios);
console.log("Espacios sobrantes: ", espaciosDisponibles % nuevosEspacios);

console.log("Operadores de Comparación - Estacionamiento Digital");
console.log("Los espacios disponibles son iguales a los nuevos espacios: ", espaciosDisponibles == nuevosEspacios);
console.log("Los espacios disponibles son diferentes a los nuevos espacios: ", espaciosDisponibles != nuevosEspacios);
console.log("Hay más espacios disponibles que nuevos espacios: ", espaciosDisponibles > nuevosEspacios);
console.log("Hay menos espacios disponibles que nuevos espacios: ", espaciosDisponibles < nuevosEspacios);
console.log("Los espacios disponibles son mayores o iguales a los nuevos espacios: ", espaciosDisponibles >= nuevosEspacios);
console.log("Los espacios disponibles son menores o iguales a los nuevos espacios: ", espaciosDisponibles <= nuevosEspacios);

console.log("Operadores Lógicos - Estacionamiento Digital");
let estacionamientoAbierto = true;
let pagoConfirmado = false;

console.log("El estacionamiento está abierto y el pago está confirmado: ", estacionamientoAbierto && pagoConfirmado);
console.log("El estacionamiento está abierto o el pago está confirmado: ", estacionamientoAbierto || pagoConfirmado);
console.log("El estacionamiento no está abierto: ", !estacionamientoAbierto);
console.log("El pago no está confirmado: ", !pagoConfirmado);

console.log("Operadores de Asignación - Estacionamiento Digital");
let espaciosOcupados = 10;
console.log("Espacios ocupados inicialmente: ", espaciosOcupados);
espaciosOcupados += 5;
console.log("Después de registrar 5 vehículos: ", espaciosOcupados);
espaciosOcupados -= 3;
console.log("Después de retirar 3 vehículos: ", espaciosOcupados);
espaciosOcupados *= 2;
console.log("Después de duplicar los registros: ", espaciosOcupados);
espaciosOcupados /= 4;
console.log("Después de dividir los registros entre 4: ", espaciosOcupados);
espaciosOcupados %= 3;
console.log("Espacios ocupados restantes: ", espaciosOcupados);

console.log("Operadores de Incremento y Decremento - Estacionamiento Digital");
let vehiculosRegistrados = 5;
console.log("Vehículos registrados inicialmente: ", vehiculosRegistrados);
vehiculosRegistrados++;
console.log("Después de registrar un vehículo: ", vehiculosRegistrados);
vehiculosRegistrados--;
console.log("Después de retirar un vehículo: ", vehiculosRegistrados);

console.log("Operadores de Concatenación - Estacionamiento Digital");
let nombre = "Lucianny";
let apellido = "Henriquez";
let nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo del propietario del vehículo: ", nombreCompleto);

console.log("Operadores de Comparación estricta - Estacionamiento Digital");
let tarifa = 10;
let tarifaTexto = "10";

console.log("La tarifa es igual al valor ingresado (==): ", tarifa == tarifaTexto);
console.log("La tarifa es estrictamente igual al valor ingresado (===): ", tarifa === tarifaTexto);
console.log("La tarifa es diferente al valor ingresado (!=): ", tarifa != tarifaTexto);
console.log("La tarifa es estrictamente diferente al valor ingresado (!==): ", tarifa !== tarifaTexto);

console.log("Operadores Ternarios - Estacionamiento Digital");
let edad = 20;
let mensaje = (edad >= 18) ? "Puedes registrar tu vehículo" : "No puedes registrar tu vehículo";
console.log(mensaje);

console.log("Tabla de Multiplicar del 5");
console.log(`1 x 5 = ${5} = ${5 * 1}`);
console.log(`2 x 5 = ${5} = ${5 * 2}`);
console.log(`3 x 5 = ${5} = ${5 * 3}`);
console.log(`4 x 5 = ${5} = ${5 * 4}`);
console.log(`5 x 5 = ${5} = ${5 * 5}`);
console.log(`6 x 5 = ${5} = ${5 * 6}`);
console.log(`7 x 5 = ${5} = ${5 * 7}`);
console.log(`8 x 5 = ${5} = ${5 * 8}`);
console.log(`9 x 5 = ${5} = ${5 * 9}`);
console.log(`10 x 5 = ${5} = ${5 * 10}`);

console.log("Tabla de División del 5");
console.log(`5 ÷ ${5} = ${5 / 5}`);
console.log(`5 ÷ ${5} = ${5 / 10}`);
console.log(`5 ÷ ${5} = ${5 / 15}`);
console.log(`5 ÷ ${5} = ${5 / 20}`);
console.log(`5 ÷ ${5} = ${5 / 25}`);
console.log(`5 ÷ ${5} = ${5 / 30}`);
console.log(`5 ÷ ${5} = ${5 / 35}`);
console.log(`5 ÷ ${5} = ${5 / 40}`);
console.log(`5 ÷ ${5} = ${5 / 45}`);
console.log(`5 ÷ ${5} = ${5 / 50}`);