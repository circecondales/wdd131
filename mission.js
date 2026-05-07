
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundImage = 'ponder\images\byui-logo-white.png';
        pageContent.style.backgroundColor = "#1a1a1a";

    } else {
        // code for changes to colors and logo
        document.body.style.backgroundImage = 'ponder\images\byui-logo-white.png';
        pageContent.style.backgroundColor = "#ffff";

    }
}