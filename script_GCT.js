// Ingresan un DNI
// Se descompone en cifras
// Se usa cada cifra para tirar los dados
// Cada tirada de dados genera dos cifras (par x,y)
// Se crea el Data de un PATH SVG con el par (x1, y1, x, y) + M + C + Z
// Se incluye este Data en una imagen SVG con gradiente.

let inputGet = document.querySelector('#input-get');

function myFunction() {
    //Numero
    var numArray = Array.from( inputGet.value );  
    document.getElementById("cifras").innerHTML = numArray.join(" ");

    //Calculo coordenadas - genera numeros random 
    var numbers = numArray;
    numbers.forEach(calcCoordenadas)
        function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
          }
          // Q = x1+ y2 + X + Y; == Q = 3 + 2 + 3 + 2
        function calcCoordenadas(item, index, arr) {
            arr[0] = "M " + "3" + " " + "3 ";
            arr[1] = "L " + "7" + " " + "3 ";
            arr[2] = "L " + "7" + " " + "7 ";
            arr[3] = "L " + "3" + " " + "7";
            arr[8] = " Z ";
          }
    
    document.getElementById("coord").innerHTML = numbers.join("");

    //Envio de Data SVG
    document.getElementsByTagName("path")[0].setAttribute( "d", numbers.join("") );
    document.getElementById("coor_usadas").innerHTML = inputGet.value; // coordenadas usadas
  }
    