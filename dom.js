const title = document.querySelector('h1');
title.textContent = "Web Page Components";

// Bordes a la primera lista
let list = document.querySelector(".list");
list.style.border = "3px solid black";

// Clase al párrafo
let para = document.querySelector("p");
para.classList.add("background");

// Dropdown
let selectElem = document.getElementById("webdevlist");

// Elementos H2
const htmlTitle = document.getElementById("html-title");
const cssTitle = document.getElementById("css-title");
const jsTitle = document.getElementById("js-title");

selectElem.addEventListener("change", function () {

    // Reiniciar colores
    htmlTitle.style.color = "black";
    cssTitle.style.color = "black";
    jsTitle.style.color = "black";

    // Cambiar según selección
    if (selectElem.value === "html") {
        htmlTitle.style.color = "red";
    }

    if (selectElem.value === "css") {
        cssTitle.style.color = "blue";
    }

    if (selectElem.value === "js") {
        jsTitle.style.color = "gold";
    }
});