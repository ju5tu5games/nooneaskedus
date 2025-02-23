let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const notepadWindow = document.getElementById('notepad-window');

function openProject() {
    notepadWindow.classList.remove('hidden');
    showSlide(0);
}

function closeProject() {
    notepadWindow.classList.add('hidden');
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
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
