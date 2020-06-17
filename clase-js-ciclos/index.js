var herramientas=["martillo", "taladaro", "escalera", "clavos", "martillo", "taladaro", "escalera", "clavos", "martillo", "taladaro", "escalera", "clavos", "martillo", "taladaro", "escalera", "clavos", "martillo", "taladaro", "escalera", "clavos"];

//la propiedad length siempre me entrega el numero maximo de elementos en un arreglo(array)

//console.log(herramientas.length) 54

var btn =document.getElementById("btn")

function init(){
for(i=0; i<herramientas.length; i++){
    console.log =herramientas(1);
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
//console.log(Object)

//platillos


var platillos=["enchilada", "taco", "tamal", "pozole", "barbacoa", "picada"];

function platos(){
for(i=3; i<platillos.length; i++){
    if(platillos[i]==="pozole" || platillos[i]==="barbacoa"){
       console.log (platillos[i])       
       }
    }
}


platos()
