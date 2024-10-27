console.log("Skrypt działa!");
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        openModal(img.src); 
    });
});

// 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiegaj domyślnej akcji formularza

    // Zresetuj błędy
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Pobierz wartości z formularza
    // const name = document.getElementById('name').value.trim();
    // const email = document.getElementById('email').value.trim();
    // const message = document.getElementById('message').value.trim();

    let valid = true; // Flaga walidacji

    // Walidacja imienia
    if (name === '') {
        document.getElementById('nameError').textContent = 'Imię jest wymagane.';
        valid = false;
    }

    // Walidacja adresu e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Proszę podać poprawny adres e-mail.';
        valid = false;
    }

    // Walidacja wiadomości
    if (message === '') {
        document.getElementById('messageError').textContent = 'Wiadomość jest wymagana.';
        valid = false;
    }
});