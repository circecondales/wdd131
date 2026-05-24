/*const container = document.querySelector('.image-container');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer'); //popup

// Event listener for opening the modal
image-container.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'
    console.log(e.target);
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    //const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();

}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});*/

// ==========================
// MOBILE MENU
// ==========================

const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// ==========================
// IMAGE MODAL VIEWER
// ==========================

const container = document.querySelector('.image-container');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open modal when clicking an image
container.addEventListener('click', openModal);

function openModal(e) {

    // Make sure an image was clicked
    console.log(e.target);
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    // Replace small image with large image
    const full = src.replace('-sm', '-sm');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

// Close modal with X button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal when clicking outside image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.close();
    }
});

