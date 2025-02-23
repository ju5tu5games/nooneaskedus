let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function openProject() {
    document.getElementById('notepad-window').classList.remove('hidden');
    showSlide(0);
}

function closeProject() {
    document.getElementById('notepad-window').classList.add('hidden');
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
