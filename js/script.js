// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Simulation
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contactForm');
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        document.getElementById('confirm-name').textContent = name;
        document.getElementById('confirm-email').textContent = email;
        document.getElementById('confirm-message').textContent = message;

        confirmationModal.show();
    });

    document.getElementById('submit-confirmed').addEventListener('click', function () {
        confirmationModal.hide();
        thankYouModal.show();

        // Reset the form
        contactForm.reset();
    });
});
