let currentSlide = 0;
const slides = document.querySelectorAll('.gem-carousel-slide');
const totalSlides = slides.length;
const container = document.querySelector('.gem-carousel-container');
var w = window.innerWidth;
let slideWidth = w * 0.8; // Initialize slideWidth based on initial window width

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    }

    const offset = (-currentSlide * slideWidth) + (w * 0.1);
    container.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Function to update slideWidth on window resize
function updateSlideWidth() {
    w = window.innerWidth; // Update the window width
    slideWidth = w * 0.8; // Update slideWidth based on new window width

    // Set the width of each slide
    slides.forEach(slide => {
        slide.style.width = `${slideWidth}px`;
    });

    // Update the container width
    container.style.width = `${totalSlides * slideWidth}px`;

    // Show the current slide after updating width
    showSlide(currentSlide);
}

// Set initial container width
container.style.width = `${totalSlides * slideWidth}px`;

// Set the width of each slide
slides.forEach(slide => {
    slide.style.width = `${slideWidth}px`;
});

// Initial display
showSlide(currentSlide);

// Add event listener for window resize to update slideWidth
window.addEventListener('resize', updateSlideWidth);
