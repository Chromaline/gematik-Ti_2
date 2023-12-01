        
    let currentSlide = 0;
    const slides = document.querySelectorAll('.gem-carousel-slide');
    const totalSlides = slides.length;
    const container = document.querySelector('.gem-carousel-container');
    var w = window.innerWidth;
    const slideWidth = w * 0.8;

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

    // Set initial container width
    container.style.width = `${totalSlides * slideWidth}px`;

    // Set the width of each slide
    slides.forEach(slide => {
        slide.style.width = `${slideWidth}px`;
    });

    // Initial display
    showSlide(currentSlide);

// Initial display
    
// Get all elements with class "h-5-proz-pil"
const h5ProzElements = document.querySelectorAll('.h-5-proz-pil');

// Iterate through each element
h5ProzElements.forEach((element) => {
  // Get the text content (which is "xx%") and parse it to get the numerical value
  const percentageValue = parseInt(element.textContent);
  
  // Resize the element based on the percentage value
  element.style.width = `${(percentageValue / 4)}rem`;
});
        
        
     
