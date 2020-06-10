mayoredad(20)

function mayoredad(edad) {
    if(edad>=18){
        console.log("mayor de edad")
} else{
        console.log("menor de edad")        
}
}



centigradosafh(16)


function centigradosafh(centigrados){
        var resultado = Math.round((centigrados* 9/5)+32)

        console.log(resultado)
}

        //centigradosfarenheis
}

var input = document.getElementById("centigrados");

var btn = document.getElementById("btn");
btn.addEventListener("clik", function(){
        centigradosafh(input.value)

 })

 var ayudantedesanta={
 color: "cafe",
 altura: "50cm",
 edad: 4
 ladrar: function(){
         console.log("gua gua")
 },
 comer: function(){
         console.log("ñam ñan")
 }
}
ayudantedesanta.ladrar()
ayudantedesanta.comer()



vocales("m")
function vocales(letras){
        if(letras ==="a" ||letras ==="e" ||letras === "i"||letras ==="o" ||letras === "u"){
                console.log("es vocal")
         } else {
                       console.log("es consonante")
                        
        }
}
