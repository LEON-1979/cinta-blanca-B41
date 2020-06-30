var arecolombiana = ["arepa", "carne pollo desmechada", "tozineta", "maicitos"];
var aremexicana  = ["arepa", "carne res desmechada", "chicharroncitos", "maicitos"];
var areperuana  = ["arepa", "carne pollo desmechada", "carne res desmechada", "maicitos"];
var arevenezolana  = ["arepa", "carne pollo desmechada", "tozineta", "chicharroncitios"];

//precios
var arecolombiana=9700
var aremexicana=9000
var areperuana=9000
var arevenezolana=10500



//suma
var suma = arecolombiana + arevenezolana + areperuana + aremexicana




//resultado
document.getElementById("resultado").innerText=suma


//contador
var arepas=["arecolombiana", "aremexicana", "arevenezolana", "areperuana"];



var btn =document.getElementById("btn")

function init(){
for(i=0; i<arepas.length; i++){
    if(arepas[i].innerText== precio)
    console.log =arepas(1);
   }
}

//btn.addEventListener("clik", init)


var numeros = (1, 3, 24, 12, 33, 65, 89, 92)

function suma(){

    var acumulador=0

    
    for(i=0; i<numeros.length;i++){

        acumulador=acumulador + numeros(i)
    }
    return acumulador

}





//promocion

var num1= prompt("ingrese numero");
var num2 = prompt("ingrese numero");
var num3= prompt("ingrese numero");

if (num1>num2) {
    alert(num1 ="numero 1 es mayor");

} else if (num3>num1){

    alert(num3 ="numero 3 es mayor");

} else{

        alert(num2="numero 2 es mayor");
}
//*btn_calc.addevenlistener("click"),calc



