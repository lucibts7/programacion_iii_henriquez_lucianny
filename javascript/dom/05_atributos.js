const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById ("verDimension");
const dimension = document.getElementById("dimension")
cambiar.addEventListener("click", function(){
    if(personaje.getAttribute("title")==="Rick"){
        personaje.setAttribute("src", "morty.jpeg");
        personaje.setAttribute("title", "Morty");
        personaje.dataset.dimension = "Dimension: C-131";
        dimension.textContent = personaje.dataset.dimension;
    } else {
        personaje.setAttribute("src", "rick.jpeg");
        personaje.setAttribute("title", "Rick");
        personaje.dataset.dimension = "Dimension: C-137";
        dimension.textContent = personaje.dataset.dimension;
    }

});

verDimension.addEventListener("click", function(){
    dimension.textContent = personaje.dataset.dimension;
})

const id= document.getElementById("portal");
const activarPortal = document.getElementById("activarPortal");

activarPortal.addEventListener("click", function(){
    if (portal.textContent=="Portal Inactivo"){
        portal.style.backgroundColor = "green";
        portal.style.color = "white";
        portal.style.borderRadius = "8px";
        portal.textContent=("Portal activado"); 
    } else {
    portal.style.backgroundColor = "red";
    portal.style.color = "white";
    portal.textContent=("Portal Inactivo");
    }
})