// Dynamic Footer Year

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();



// Mobile Menu

const menuButton = document.querySelector("#menu-button");

const navMenu = document.querySelector("#nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});