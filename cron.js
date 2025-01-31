"use strict"

var hh = parseInt(localStorage.getItem('hh')) || 0;
var mm = parseInt(localStorage.getItem('mm')) || 0;
var ss = parseInt(localStorage.getItem('ss')) || 0;

var tempo = 1000;
var cron;
var startTime = parseInt(localStorage.getItem('startTime')) || Date.now(); // Tiempo de inicio del cronómetro

// Mostrar el tiempo inicial en el elemento counter
document.getElementById('counter').innerText = formatTime(hh, mm, ss);

// Inicia el temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

// Para el temporizador pero no limpia las variables
function pause() {
    clearInterval(cron);
}

// Para el temporizador y limpia las variables
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    localStorage.setItem('hh', hh);
    localStorage.setItem('mm', mm);
    localStorage.setItem('ss', ss);
    localStorage.removeItem('startTime'); // Eliminar el tiempo de inicio

    document.getElementById('counter').innerText = '00:00:00';
}

// Hace la cuenta del tiempo y la visualización
function timer() {
    var now = Date.now();
    var elapsed = now - startTime; // Tiempo transcurrido desde el inicio

    ss = Math.floor((elapsed / 1000) % 60);
    mm = Math.floor((elapsed / (1000 * 60)) % 60);
    hh = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

    // Guarda el estado del cronómetro en localStorage
    localStorage.setItem('hh', hh);
    localStorage.setItem('mm', mm);
    localStorage.setItem('ss', ss);
    localStorage.setItem('startTime', startTime); // Guardar el tiempo de inicio

    var format = formatTime(hh, mm, ss);
    document.getElementById('counter').innerText = format;

    return format;
}

// Función para formatear el tiempo HH:MM:SS
function formatTime(hh, mm, ss) {
    return (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
}