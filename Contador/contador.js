//Variables para elementos del front
var btnAum = document.querySelector("#aumentar");
var btnDim = document.querySelector("#disminuir");
var btnReset = document.querySelector("#resetear");
var btnImgRandom = document.querySelector("#imgRandom");
var contador = document.querySelector("#contador");
var contenedorImg = document.querySelector("#contenedorImg");

var valorContador = 0; //Contador empieza en 0.

//Funciones

function aumentar(){
    valorContador++;
    contador.innerHTML = valorContador;
}
btnAum.addEventListener("click", aumentar);

function disminuir(){
    valorContador--;
    contador.innerHTML = valorContador;
}
btnDim.addEventListener("click", disminuir);

function reset(){
    valorContador = 0;
    contador.innerHTML = valorContador;
    alert("¡Cuidado, vas a resetear la página!")
}
btnReset.addEventListener("click", reset);

function ponerImagen(){
    const img = document.createElement("img");
    img.src = "https://picsum.photos/500";
    img.alt = "Pokémon del día";
    contenedorImg.appendChild(img);
}
btnImgRandom.addEventListener("click", ponerImagen);



