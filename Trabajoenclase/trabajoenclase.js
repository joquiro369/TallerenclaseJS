     
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

//Tambien podemos agregar contenido o items en los arregos por medio de la funcion VARIABLE.PUSH 
var celulares = ["Apple" , "Samsung" , "Huawei" , "Xiaomi"];
document.getElementById("cell3").innerHTML = celulares;
//Luego de imprimir se ancla a la funcion de un Boton con FUNCTION myFunction()
function myFunction() {
  celulares.push("MOTOROLA");
  document.getElementById("cell3").innerHTML = celulares;
}


        //Operadores de asisgnacion += -= *= /=

//Ejemplo de una suma con operadores en JS (la varivale se opera con +=)
var suma = 10;
suma += 5;
document.getElementById("suma").innerHTML = suma;
//Ejemplo de una division con operadores en JS (la varivale se opera con /=)
var division = 10;
division /= 5;
document.getElementById("division").innerHTML = division;


        //Funciones para diferentes operaciones en JS y convertir en resultados

//Ejemplo para retornar el cambio de temperatura de grados celcios a grados centigrados
document.getElementById("temperatura").innerHTML =
"convertimos la temperatura a " + toCelsius(77) + " Grados Celsios";
//se aplica la funcion de los que se quiere cambiar (y lo que se quiere de resultado)
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 


        //Operadores de Comparacion

//Los operadores de comparación se utilizan en declaraciones lógicas para determinar la igualdad o diferencia entre variables o valores.
var age = 5;
document.getElementById("comparacion").innerHTML = (age < 18);      //si la condicion se cumple el retorno sera verdadero

//Operadores Logicos
//El operador AND (&&) devuelve verdadero si ambas expresiones son verdaderas; de lo contrario, devuelve falso.
var x = 6;
var y = 3;

document.getElementById("opelogicos").innerHTML = 
(x < 10 && y > 1) + "<br>" +  //en este caso la variable x es menos a 10 y mayor a 1 por lo tanto el retorno sera verdadero
(x < 10 && y < 1);            //en este caso la variable x es menor a 10 pero la variable y es mayor a 3 por lo tanto el retorno sera falso


//JavaScript también contiene un operador condicional que asigna un valor a una variable en función de alguna condición.
// la sintaxis sera       -- variablename = (condition) ? value1:value2
function myFunction() {
    var age, voteable;
    age = document.getElementById("edad").value;
    voteable = (age < 18) ? "eres muy joven":"tienes edad suficiente";
    document.getElementById("opeternario").innerHTML = voteable + " para votar.";
}


        //Declaracion de Cambio en JS
//Utilice la switchdeclaración para seleccionar uno de los muchos bloques de código que se ejecutarán.
// la sintaxis de la expresión switch siempre sera -- switch (expression){  elementos como case, braek, default, get.day}

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("getday").innerHTML = "Today is " + day;






