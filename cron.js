"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//¿Cuántos milisegundos valen 1 segundo?
var cron;

//Inicia el temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para el temporizador pero no limpia las variables
function pause() {
    clearInterval(cron);
}

//Para el temporizador y limpia las variables
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Hace la cuenta del tiempo y la visualización
function timer() {
    ss++; //Incrementa +1 en la variable ss

    if (ss == 60) { //Verifica si ha llegado a 59 segundos
        ss = 0; //Regresa los segundos a 0
        mm++; //Añade +1 en la variable mm

        if (mm == 60) { //Verifica si ha llegado a 59 minutos
            mm = 0;//Regresa los minutos a 0
            hh++;//Añade +1 en la variable hora
        }
    }

    //Crea una variable con el valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Inserta el valor tratado en el elemento counter
    document.getElementById('counter').innerText = format;

    //Devuelve el valor tratado
    return format;
}