
var edad = [];
var mayoredad = prompt("cantidad");

// inicializacion es (var i = 0;)
// la condicion es la variable i menor igual a la mayoria de edad que se digite en el prompt (i < mayoredad;)
// se suma con el incrementador i++ 

for (var i = 0; i < mayoredad; i++) {
    //el cuerpo del ciclo que quiere repetirse siempre y cuando la condicion sea verdadera
    edad[1] = prompt("edades" + (i+1));    
}  

var años = 0;
while (años <= mayoredad); {
      document.write (años [edad]);
    
}

console.log (edad);
document.getElementById("tareaalerta").innerHTML = edad;