var mesa={
    altura="98cm",
    ancho = "70cm",
    color ="cafe",
    patas = 4,
    silas: ["sillas1", "sillas2", "silla3", "silla4"],
    marca: {    
        nombre:"rimax",
        vendedor:"andres",
    },
    a_la_ventya: true,
    expandir:function(){
        return"se expandio";
    },
};

mesa.altura="75cm";

//console.log(mesa.color)

console.log(mesa.expandir())

//html y javascript

var titulo=document.getElementById("titulo");
var boton=document.getElementById("boton");


//console.log(boton)

function cambiartitulo(){
    titulo.innerHTML="se cambio el texto";
}
boton.addEventListener("click", cambiartitulo)

//ejercico

var color=document.getElementById("input_color");

var boton2=document.getElementById("boton2");

function cambiar_color() {
    var color_elegido =color.value;
    titulo.style.color=color_elegido,
}
boton2.addEventListener("click", cambiar_color)