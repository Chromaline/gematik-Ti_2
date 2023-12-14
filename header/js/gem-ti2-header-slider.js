// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
  const sliderItems = document.querySelectorAll('.gem-ti2-header-slider-user');

  sliderItems[0].classList.add('active');

  sliderItems.forEach(item => {
    item.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        const prevActiveItem = document.querySelector('.gem-ti2-header-slider-user.active');
        prevActiveItem.classList.remove('active');
        prevActiveItem.style.transform = 'scale(1)';

        this.classList.add('active');
        this.style.transform = 'scale(1.1)';

        setTimeout(() => {
          prevActiveItem.classList.remove('active');
        }, 300); // Adjust this delay to match the transition duration in CSS

        const selectedItemText = this.textContent;
        console.log(`Selected item: ${selectedItemText}`);
        // Add logic to change the content below based on the selected item
      }
    });
  });
});
