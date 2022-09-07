

var person=""
var bpm_caf=100
var bpm_tes= 100
var bpm_esp= 100
/*var  sec= ["Cafés", "Tés", "Especias"];


var usuario = prompt('ingrese su nombre de usuario') ;
var semestre = prompt('ingrese el nro de semestre 1 o 2') ;



var bpm_caf= prompt('¿Cual fue el (%) de la nota en la auditoría de B.P.M el semestre '+semestre+' en '+ sec[0]+" ; "+usuario+'?');
*/

function asknum() {
    let n1 = prompt('ingrese un nro entero') ;
    
       if (n1 != null && n1>=0 ) {
        document.getElementById ('showtext').innerHTML='El nro es positivo';
        
     
      }
      else {
        document.getElementById ('showtext').innerHTML='El nro es (-)';
      }
    }
   