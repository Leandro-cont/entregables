"use strict";

document.addEventListener('DOMContentLoaded', function() {
    let boton1 = document.getElementById("boton1");
    let boton2 = document.getElementById("boton2");
    let caja1 = document.getElementById("caja1");
    let caja2 = document.getElementById("caja2");

    function mostrarCaja1() {
        caja1.style.display = "flex";
        caja2.style.display = "none";
    }

    function mostrarCaja2() {
        caja1.style.display = "none";
        caja2.style.display = "flex";
    }

    boton1.addEventListener("click", mostrarCaja2);
    boton2.addEventListener("click", mostrarCaja1);
});