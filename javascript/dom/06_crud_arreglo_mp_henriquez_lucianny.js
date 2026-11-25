let vehiculos =  [
    {
        id:1,
        placa:"ABC-1234",
        zona: "Zona A",
        estado: "disponible"
    },
    {
        id:2,
        placa:"DEF-5678",
        zona: "Zona B",
        estado: "ocupado"
    },
    {
        id:3,
        placa:"GHI-9012",
        zona: "Zona C",
        estado: "reservado"
    },
];

const formulario = document.getElementById("formulario");
const placa = document.getElementById("placa");
const zona = document.getElementById("zona");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");
console.log("mostrarVehiculos");
function mostrarVehiculos(){
    contenedor.replaceChildren();
    vehiculos.forEach(function(vehiculo){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent=vehiculo.placa;
        const parrafoZona = document.createElement("p");
        parrafoZona.textContent="Zona: "+vehiculo.zona
        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent="Estado: "+vehiculo.estado
        const acciones = document.createElement("div");
        acciones.classList.add("acciones");
        const botonEditar = document.createElement("button");
        botonEditar.textContent ="Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function(){
            editarVehiculo(vehiculo.id)
        })
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent= "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function(){
            eliminarVehiculo(vehiculo.id)
        });

        acciones.append(botonEditar,botonEliminar);
        tarjeta.append(titulo,parrafoZona,parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

function eliminarVehiculo(id){
    const vehiculo = vehiculos.find(function(vehiculo){
        return vehiculo.id== id
    })
    const confirmar = confirm ("¿Eliminar a "+ vehiculo.placa+"?");
    if (!confirmar){
        return
    }
    vehiculos = vehiculos.filter(function(vehiculo){
        return vehiculo.id!==id
    })
    mostrarVehiculos();
}

let idEditando = null;
function editarVehiculo(id){
    const vehiculo = vehiculos.find(function(p){
        return p.id==id
    })
    placa.value = vehiculo.placa;
    zona.value = vehiculo.zona;
    estado.value = vehiculo.estado;
    idEditando=id;
    guardar.textContent = "Editar";
    cancelar.hidden=false;
    placa.focus()
}


mostrarVehiculos();

siguenteId=4;
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const placaVehiculo = placa.value.trim();
    const zonaVehiculo = zona.value;
    const estadoVehiculo = estado.value;
    if (idEditando==null){
        const nuevoVehiculo = {
            id: siguenteId,
            placa: placaVehiculo,
            zona: zonaVehiculo,
            estado: estadoVehiculo
    }
    siguenteId++;
    vehiculos.push(nuevoVehiculo);
    } else{
        const vehiculo = vehiculos.find(function (p){
            return p.id == idEditando
        })
        vehiculo.placa = placaVehiculo;
        vehiculo.zona = zonaVehiculo;
        vehiculo.estado = estadoVehiculo;
    }
    mostrarVehiculos();
    limpiarFormulario();
});

function limpiarFormulario(){
    formulario.reset();
    idEditando=null;
    guardar.textContent= "Agregar";
    cancelar.hidden= true;
}
cancelar.addEventListener("click", function(){
    limpiarFormulario()
});