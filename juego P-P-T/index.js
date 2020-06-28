var nombre = document.getElementById("nombre");
var start_btn =  document.getElementById("start_btn");
var start_section = document.getElementById("start");
var game_section = document.getElementById("game");
var game_user_name =document.getElementById("game_user_name");
var select_user_weapon = document.getElementById("selecionar-arma");
var play_btn = document.getElementById("play_btn");
var message = document.getElementById("mensaje");
var game_computer_weapon = document.getElementById("game-computer-weapon")

//variables globales
var userName ="";
var userWeapon ="";
var compuWeapon ="";
var weapons = ["piedra", "papel", "tijera"];


//funiciones
function start (){
    userName=name.value;
    start_section.style.display = "none";
    game_section.style.display ="flex";
    game_user_name.innerText = userName;
}

function selectComputerWeapon(){
    return weapons[math.floor(math.random() *3)];
}
s
function play(){
    userWeapon =select_user_weapon.value;
    compuWeapon = selectComputerWeapon();
    game_computer_weapon.innerText = compuWeapon
    compare();
}

function compare(){
    if(userWeapon === "piedra" && compuWeapon==="papel"){
        message.innerText = "la computadora gana";

    }else if (userWeapon==="pierda"&& compuWeapon==="tijeras"){
        message.innerText = userName +"gana";

    }else if(userWeapon==="papel" && compuWeapon==="tijeras"){
        message.innerText = "la computadora gana";
     
    }else if(userWeapon==="papel" && compuWeapon==="pierda"){
        message.innerText = userName +"gana";   

    }else if(userWeapon ==="tijeras" && compuWeapon==="piedra"){
        message.innerText = "la computaroda gana";

    }else if(userWeapon ==="tijeras" && compuWeapon==="papel"){
        message.innerText = userName +"gana";
    }else{
        message.innertext = "Empate"
    }
}



//asignaciones de eventos

start_btn.addEventListener("click", start);
play_btn.addEventListener("clik", play);