
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('.content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        // Dark mode styles
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";

        pageContent.style.backgroundColor = "#1a1a1a";
        pageContent.style.color = "white";

        logo.src = "images/byui-logo-white.png";

    } else {
        // code for changes to colors and logo
         // Light mode styles
        document.body.style.backgroundColor = "#ddd";
        document.body.style.color = "black";

        pageContent.style.backgroundColor = "white";
        pageContent.style.color = "black";

        logo.src = "images/BYUIPHOTO.png";

    }
}