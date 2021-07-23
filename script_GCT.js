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
        function randomNumber(min, max, decimalPlaces) {
          return (Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;
          }
          // C (x1 y1) (x2 y2) (X Y) 
          // Mi punto M está dentro del Cuadrante A3
          // Muevo mi punto C dentro del Cuadrante A2, y su asa dentro del cuadrante A1 o A4.
        function calcCoordenadas(item, index, arr) {
            arr[0] = "M " + "1 " + " " + "4 ";
            arr[1] = " C " + randomNumber(0,2.5,2) + " " +  randomNumber(0,2.5,2) + " " +  randomNumber(0,2.5,2) + " " +  randomNumber(0,2.5,2) 
            + " " + randomNumber(2.5,5,2) + " " + randomNumber(0,2.5,2); // C (x1 y1) (x2 y2) (X Y)

            arr[2] = " C " + randomNumber(7.5,10,2) + " " +  randomNumber(0,2.5,2) + " " +  randomNumber(7.5,10,2) + " " +  randomNumber(0,2.5,2) 
            + " " + randomNumber(7.5,10,2) + " " + randomNumber(2.5,5,2); // C (x1 y1) (x2 y2) (X Y)

            arr[3] = " C " + randomNumber(10,12,2) + " " +  randomNumber(7.5,7.5,2) + " " +  randomNumber(10,12,2) + " " +  randomNumber(7.5,10,2) 
            + " " + randomNumber(2.5,7.5,2) + " " + randomNumber(7.5,10,2); // C (x1 y1) (x2 y2) (X Y)

            arr[4] = " C " + randomNumber(0,2.5,2) + " " +  randomNumber(5,10,2) + " " +  randomNumber(0,2.5,2) + " " +  randomNumber(5,10,2) 
            + " " + "1" + " " + "4"; // C (x1 y1) (x2 y2) (X Y)

            arr[5] = " Z "
          }
    
    document.getElementById("coord").innerHTML = numbers.join("");

    //Envio de Data SVG
    document.getElementsByTagName("path")[0].setAttribute( "d", numbers.join("") );
    document.getElementById("coor_usadas").innerHTML = inputGet.value; // coordenadas usadas
  }
    