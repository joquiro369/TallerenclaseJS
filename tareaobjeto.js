
var autos = {"cars" :
                     '{"marca":"bmw","modelo":"318i","color":"negro"},'+
                     '{"marca":"audi","modelo":"a4","color":"rojo"},'+
                     '{"marca":"mercedes","modelo":"compresor","color":"azul"},'
}

tareaobj = JSON.parse(autos);

for (let i = 0; i <= tareaobj.cars.length; i++) {
    document.write(tareaobj.cars[i].marca + " " + tareaobj.cars[i].modelo + " " + tareaobj.cars[i].color + "<br>");
    alert(tareaobj.cars[2].modelo);
}





document.getElementById("tareaobjeto").innerHTML = 
tareaobj.cars[2].marca + " " + tareaobj.cars[2].modelo + " " + tareaobj.cars[2].color;
