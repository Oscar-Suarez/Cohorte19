/*
Como leer y traer nodos del arbol DOM

Metodos tradicionales

    - document.getElementById (trae elementos por id)
    - document.getElementsByTagName (trae elementos por etiqueta)
    - document.getElementsByClassName (trae elementos por clase)

*/

console.log("Elemento traido por id: ", document.getElementById("titulo2"));
console.log("Elemento traido por clase: ", document.getElementsByClassName("titulos"));
console.log("Elemento traido por tag: ", document.getElementsByTagName("h3"));


/*
Metodos modernos

    - document.querySelector (seleccionar cualquier cosa que se especifique dentro de su argumento, y trae el primer elemento que encuentre)

    - document.querySelectorAll (selecciona cualqueir cosa que se especifique dentro de su argumento, y trae todos los elementos que encuentre.)

*/

console.log("Elemento traido por query ", document.querySelector("#titulo1"));
console.log("Elemento traido por query all ", document.querySelectorAll(".titulos"));

/*

Metodos para crear y agregar elementos en el DOM

Este proceso se divide en dos:
    - Crear nodos
        - document.createElement("h3") (este crea etiquetas)
        - document.createTextNode("Este es un mensajito") (este crea textos dentro de las etiquetas)
    Es importante crear nodos del tipo etiqueta, pero tambien agregarles texto
    Estamos creando un elemento, aun no lo agregamos al DOM. Estos elementos se guardan en un espacio de memoria. Es por eso que los estamos asignando a una variable o constante, para poder insertarlo posteriormente en una posicion determinada del DOM.

/*

    - Agregar nodos
        - parentElement.appendChild
        - parentElement.append
        - parentElement.insertBefore
        - parentElement.insertAdjacentElement
*/


/*.appenChild: Metodo mas comun para agregar elementos al HTML. Agrega elementos como hijos, para ponerlo debemos tomar dos cosas en cuenta:

    1. Elemento de referencia o elemento padre
    2. Elemento que quiero agregar

*/

const etiquetaH1 = document.createElement("h1");
let img = document.createElement("img");
let texto = document.createComment("Este es un comentario");


const elementPadre = document.querySelector("#DIF");
const h3 = document.createElement("h3");

const textoH3 = document.createTextNode("Soy el texto de H3");
h3.appendChild(textoH3);

elementPadre.appendChild(h3);

elementPadre.appendChild(img);


img.src = "https://scontent.fgdl5-4.fna.fbcdn.net/v/t1.6435-9/83497795_2696033720431797_5638712050084478976_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=973b4a&_nc_ohc=7UvHPe_NGDAAX-siOSh&_nc_ht=scontent.fgdl5-4.fna&oh=00_AfAw5o13OlfuU7RO4SnQyeEnUqXQVNRDcyaWSCruSGiOYQ&oe=6393581A";
img.alt = "foto dragalge";
img.width = "250";



