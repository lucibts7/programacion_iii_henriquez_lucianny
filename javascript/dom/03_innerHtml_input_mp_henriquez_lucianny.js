const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent="Mensaje desde Estacionamiento Digital";
saludo.innerHTML= `<h1>Bienvenido a nuestro estacionamiento</h1>`;

const ficha = document.getElementById("ficha")
ficha.innerHTML=`
<h1>Vehículo Registrado</h1>
<p>Propietario: Carlos Pérez</p>
<p>Tipo: Automóvil</p>
<p>Estado: Registrado</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function(){
    console.log("Ejecutando click", nombre.value);
    saludar.textContent="Hola " + nombre.value;
});