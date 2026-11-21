const costo = document.getElementById("costo");
const tarifa = document.getElementById("tarifa");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function(){
    if(costo.value.trim()===""
    || tarifa.value.trim()==""){
        resultado.textContent="Completa ambos campos";
    }

    const cantidad = Number(costo.value);
    const tarifaNumber=Number(tarifa.value);

    if(!Number.isFinite(cantidad)||
    !Number.isFinite(tarifaNumber)){
        resultado.textContent="Ingrese valores válidos";
        return;
    }

    const total=cantidad*tarifaNumber;
    resultado.textContent="Costo total: $"+ total;
});