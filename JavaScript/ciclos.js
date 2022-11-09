console.log("Hola mundo")

//Ciclos, loops, o bucles

//Ciclo For (para)
for (var boletos = 1; boletos <=10; boletos++){
    console.log(boletos);
}

/*

Dos variaciones de for

- for....of: Nos permite recorrer el objeto (array) y por cada uno de los elementos del objeto, nos devuelve el VALOR

- for....in: Nos permite recorrer el objeto (array) y por cada uno de los elementos del objeto, nos devuelve el POSICION


for ( var elemento of array){
    //bloque de codigo
}


Elemento: Referencia a cada uno de los elementos del array, y que puede ser cualquier nombre, por eso la iniciamos con un var, debido a que es una variable.

*/

var animales = ["Perro", "Gato", "Erizo", "Caballo", "Cabra"];

for (var animalitoQueVoyABuscar of animales){ //
    console.log(animalitoQueVoyABuscar);
}

//While
var numero = 0;
while (numero < 3){
    numero++
    console.log(numero);
}

//Do While

var num = 0;
do{
    console.log(num);
    num++;
} while (num < 6);


for (let i = 0; i < 15; i++) { //Ejecutamos el bucle, iniciando en el valor 0, y hasta que el valor de i sea menor a 15, se ejecutara el bloque de codigo.
    if (i == 10) { //Si el numero es igual a 10, se salta a la siguiente iteracion.
        continue; //Salta a la siguiente iteracion
    }
    console.log(i); //Imprimimos el valor de la variable i, en este caso se imprimen los numeros del 0 al 14, salvo el 10.
    }

    for(let cliente = 0; cliente < 15; cliente++){
        if (cliente == 3){
            console.log("Eres el cliente 3")
            continue;
        }
        console.log(cliente);
    }

