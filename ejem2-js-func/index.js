// objetos
var mesa={
    altura="90cm",
    ancho = "70cm",
    color ="cafe",
    patas = 4,
    silas: ["sillas1", "sillas2", "silla3", "silla4"],
    marca: {    
        nombre:"Rimax",
        vendedor:"Andres",
    },
    a_la_ventya: true,

    expandir:function(){
        return"se expandio";
    },
};

mesa.altura="75cm";

//console.log(mesa.color)

//console.log(mesa.expandir())

//html y javascript

//ejercicio titulo

var titulo=document.getElementById("titulo");
var btn=document.getElementById("boton");

function cambiar_titulo(){
    titulo.innerHTML="se cambio el texto";
}
boton.addEventListener("click", cambiar_titulo)

//ejercico color

var color=document.getElementById("input_color");

var btn_color=document.getElementById("boton_color");

function cambiar_color() {
    var color_elegido =color.value;
    titulo.style.color=color_elegido
}
btn_color.addEventListener("click", cambiar_color)