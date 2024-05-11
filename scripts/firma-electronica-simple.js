const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let counter = 0;
let autoSlideInterval;

function showSlide(index) {
    counter = index;
    updateSlide();
    updateNavigation();
    restartAutoSlide(); // Reinicia el intervalo automático después de seleccionar una diapositiva
}

function nextSlide() {
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    updateSlide();
    updateNavigation();
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    updateSlide();
    updateNavigation();
}

function updateSlide() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
}

function updateNavigation() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 50000);   ////TIEMPO SLIDE
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function restartAutoSlide() {
    stopAutoSlide(); 
    startAutoSlide();
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

startAutoSlide();

window.addEventListener('scroll', function () {
    const navigation = document.querySelector('.navigation');

    // Verificar la posición del scroll
    if (window.scrollY === 0) {
        // Si el usuario está en la parte superior de la página
        navigation.style.transition = 'bottom 0.1s ease';
        navigation.style.bottom = '120px';
    } else {
        // Si el usuario ha desplazado hacia abajo
        navigation.style.transition = 'bottom 0.1s ease';
        navigation.style.bottom = '20px';
    }
});

