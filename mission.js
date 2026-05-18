
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('.content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        // Dark mode styles
        document.body.classList.add('dark');

        logo.setAttribute('src', 'images/byui-logo-white.png');

    } else {
        // code for changes to colors and logo
         // Light mode styles
        document.body.classList.remove('dark');

        logo.setAttribute('src', 'images/byuiphoto.png');

    }
}