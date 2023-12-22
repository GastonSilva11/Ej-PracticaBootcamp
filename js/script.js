


// Ejercicio FUNCION isInArray


var names = ["Maria", "Pedro", "Julieta", "Esmeralda", "Rubo"]


//Iniciamos la funcion determinando que va a recibir 2 argumentos
function isInArray(ArrayName, name) {

    //El for recorre cada valor del array que llega (primer argumento) y los compara con el segundo argumento que llega, si coinciden 100% retorna true, sino false
for (let i = 0; i < ArrayName.length; i++) {

    if (ArrayName[i] === name) {
        return true;

    }
    
}
return false
}


var SegNombres = ["Sol", "Rey", "Hugo"]

console.log(isInArray(names, "Maria"))
console.log(isInArray(names, "Carlos"))
console.log(isInArray(names, "Pedro"))

console.log(isInArray(SegNombres, "Hugo"))





// Ejercicio funcion hasLastName


function hasLastname(objeto) {

    // con el método hasOwnProperty reconoces si es verdadero que tiene la propiedad que determines dentro del paréntesis, en caso contrario retorna false
    // y luego agregamos que el objeto no puede ser un string vacio

    return objeto.hasOwnProperty('lastname') && objeto.lastname !== "";
     

}
    //return objeto.hasOwnProperty('lastname')



var obj1 = {
    firstname :"Ana",
    age : "40"
}

var obj2 = {
    firstname :"Rubo",
    lastname : "Delio",
    age : "40"
    
}


var obj3 = {
    firstname :"Rubo",
    lastname : "",
    age : "40"
    
}


console.log("Ejercicio hasLastname : ")

console.log(hasLastname(obj1));
console.log(hasLastname(obj2));
console.log(hasLastname(obj3));




// EJERCICIO CAMBIAR COLOR DE FONDO


var cambiarColor = document.querySelector(".button");
var CuerpoEntero = document.querySelector(".cuerpo");

function clickSobreBoton(){

CuerpoEntero.classList.toggle("FondoRojo")

}

cambiarColor.addEventListener("click" , clickSobreBoton);


