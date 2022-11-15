/*
Programacion Orientada a Objetos (POO)

Paradigma = Manera en la que se puede hacer algo especifico.
Paradigma de programacion : Forma o manera en la que puedo programar algo.


Otras formas de programar:
Programacion funcional
Programacion imperativa
Programcion declarativa


Pilares fundamentales de la programacion POO
    - Polimorfismo
    - Herencia
    - Encapsulamiento
    - Abstraccion



- Clases (plantillas para hacer muchos objetos)
- Objetos
    - Atributos (lo que tengo - ojitos pispiretos)
    - Metodos  (lo que puedo hacer con lo que tengo - mirar lo bello de la vida)

*/

//Ejemplo del gatito

// //Propiedades = variables o constantes
// const color = "Gris";
// var tamanio = "Chiquito";
// var edad = 5;
// var cicatrices = true;
// const raza = "Angora";
// var caracter = "Agresivo"

// //Metodos o funciones
// function comer(){}
// function treparArboles(){}
// function maullar(){}
// function grunir(){}
// function dormir(){}
// function corretearPerros(){}

// //Precursor de los objetos Array
// var cat = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
// console.log(typeof(cat));


// //Evolucion de los arreglos
// var Cilantro = {
//     nombre: "Cilantro",
//     edad: 5,
//     caracter : "Agresivo",
//     raza : "Angora",
// }

// var Perejil= {
//     nombre: "Perejil",
//     edad: 10,
//     caracter : "Feliz",
//     raza : "Siames",
// }

// var Cebollita= {
//     nombre: "Cebollita",
//     edad: 1,
//     caracter : "Timida",
//     raza : "Esfinge",
// }

// var Limon= {
//     nombre: "Limon",
//     edad: 2,
//     caracter : "Agrio",
//     raza : "Egipcio",
// }


// console.log(typeof(Cilantro));
// console.log("El nombre de Cilantro es", Cilantro.nombre);
// console.log("El caracter de Cilantro es",Cilantro.caracter);


// var Octocat = {
//     nombre : "Octocat",
//     edad : 2,
//     caracter : "Tranquilo",
//     raza : "Gato-Pulpo",
// }

//Clases (plantilla)

class gato{
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

    constructor(nombre,edad,caracter,raza){
        this.nombre = nombre;
        this.edad = edad;
        this.caracter = caracter;
        this.raza = raza;
    }

    maullar(){
        console.log("Miau");
    }
    dormir(){
        console.log("Zzzzz");
    }
    ronronear(){
        console.log("Purrrr");
    }

};

var Octocat = new gato ("Octocat", 8, "programador", "Gato pulpo");
var AntonioBanderas = new gato ("Antonio Banderas", 18, "Audaz", "Gato con botas");
var BolaDeNieve = new gato ("Bola de nieve", 5, "Intrigante", "Siamés");
var Garfield = new gato ("Garfield", 5, "Tranquilo", "Exótico");
var Felix = new gato ("Félix", 2, "Feliz", "Siamés");

console.log(Octocat);
console.log(AntonioBanderas);
console.log(BolaDeNieve);
console.log(Garfield);
console.log(Felix);





/*
JSON (JavaScript Object Notation)

Es un formato estandar (que ya existe, alguien lo definio y tiene ciertas reglas) que esta basado en texto y nos sirve para representar datos estructurados basados en la sintaxis de JS

*/

//Objetos JavaScript
var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
};

//Objetos JSON
var CebollitaJSON= {
    "nombre": "Cebollita",
    "edad": 1,
    "caracter" : "Timida",
    "raza" : "Esfinge",
};


console.log(Cebollita);
console.log(CebollitaJSON);

const objetoDeserializado = {"nombre" : "Cebollita","edad" : 5};

const objetoSerializado = `{"nombre" : "Cebollita","edad" : 5};`


var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

//(objeto a string para que el servidor lo lea)
const PerejilSerializado = JSON.stringify(Perejil);

//(string a un objeto JSON)
const PerejilDeserializado = JSON.parse(PerejilSerializado);

console.log (PerejilSerializado); //como cadena
console.log (PerejilDeserializado); //como objeto