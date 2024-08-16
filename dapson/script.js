document.addEventListener('DOMContentLoaded', () => {
    const bookNowButton = document.getElementById('book-now');
    const modal = document.getElementById('booking-modal');
    const closeButton = document.querySelector('.close-button');
    const bookingForm = document.getElementById('booking-form');

    bookNowButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Booking submitted!');
        modal.style.display = 'none';
    });
});
