//Script de la calculadora

//Contenedores de texto
var num1 = parseInt(document.querySelector("#num1").value);
var num2 = parseInt(document.querySelector("#num2").value);

//Botones
var btnSuma = document.querySelector("#suma");
var btnResta = document.querySelector("#resta");
var btnDivi = document.querySelector("#divi");
var btnMulti = document.querySelector("#multi");
var btnLimpiar = document.querySelector("#limpiar");

//Resultado
var resultado = document.querySelector("#resultado");

// num1.innerHTML = num1
// num2.innerHTML = num2

btnSuma.addEventListener("click", function(){
    resultado.innerHTML = num1 + num2;
});

btnResta.addEventListener("click", function(){
    resultado.innerHTML = num1 - num2;
});

btnDivi.addEventListener("click", function(){


    num1 == 0 || num2 == 0  ? resultado.innerHTML = "Estás dividiendo entre 0" : resultado.innerHTML = num1 / num2;
});

btnMulti.addEventListener("click", function(){
    resultado.innerHTML = num1 * num2;
});

btnLimpiar.addEventListener("click", function(){

    resultado.innerHTML = 0;
});



