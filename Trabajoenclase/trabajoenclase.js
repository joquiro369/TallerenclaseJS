     
        //OBJETO
     
//EJEMPLO PROPIO para entender la sintaxis de un objeto
//Aqui creo un objeto
var cellphone = {marca:"apple",modelo:"6s",color:"gold"};

//Aqui es la manera de llamar al objeto
//document.getElementById("cell").innerHTML = "EL MODELO DEL CELULAR ES" + cellphone.modelo + " " + "LA MARCA DEL CELULAR ES" + cellphone.marca + " " + "EL COLOR DEL CELULAR ES" + cellphone.color;
document.getElementById("cell").innerHTML =
" EL CELULAR " + cellphone.marca + " DE MODELO " + cellphone.modelo + "DE COLOR" + cellphone.color;


//A un objeto le podemos agregar una funcion
//Aqui un metodo para definir una funcion
 var cell = {
            marca:"apple",modelo:"6s",color:"gold",
        marcamodel : function () {
           return this.marca + " MODELO " + this.modelo
        }
 };
//Ahora llamamos e imprimimos la funcion
document.getElementById("cell1").innerHTML = cell.marcamodel();

//Una manera alternativa para acceder a las propiedades de una matriz de un objeto
var cellphone = {
    marca:"apple",
    modelo:"6s",
    color:"gold"
};
document.getElementById("cell2").innerHTML =
cellphone["marca"] + " " + cellphone["color"];



        //ARREGLO

//EJEMPLO DEL PROPIIO para entender la sintaxis de un arreglo
//Aqui creo un arreglo simple
var smartphone = ["samsung","galaxi","black"];

//Aqui llamo e imprimo en el html el arreglo
document.getElementById("smartphone").innerHTML = smartphone;

//Tambien puedo cambiar un elemento del arreglo
var smartphone = ["samsung","galaxi","black"];
smartphone [2] = "white";
document.getElementById("smartphone1").innerHTML = smartphone;

//aqui accedo unicamente a un elemento del arreglo
document.getElementById("smartphone2").innerHTML = smartphone [1];

//con la propiedad LENGTH podemos ver la cantidad de elementos de una amtriz
document.getElementById("smartphone3").innerHTML = smartphone.length;
















