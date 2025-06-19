// Toggle navigation menu visibility: show nav and close icon on menu click, hide them on close icon click
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

menu.addEventListener('click', () => {
    nav.classList.add('nav-visible');
    menu.classList.add('menu-hide');
    close.classList.add('close-show');
});


close.addEventListener('click', () => {
    nav.classList.remove('nav-visible');
    menu.classList.remove('menu-hide');
    close.classList.remove('close-show');
});

// Basic client-side validation on contact form submit; shows error if fields are empty, otherwise shows sending status
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const status = document.getElementById('form-status');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        status.style.color = 'red';
        status.textContent = 'Please fill in all required fields.';
    } else {
        status.style.color = 'green';
        status.textContent = 'Sending...';
    }
});