// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
  const sliderItems = document.querySelectorAll('.gem-ti2-header-slider-user');

  sliderItems[0].classList.add('active');

  sliderItems.forEach(item => {
    item.addEventListener('click', function() {
      const prevActiveItem = document.querySelector('.gem-ti2-header-slider-user.active');
      prevActiveItem.classList.remove('active');

      this.classList.add('active');

      // Apply transformation by adjusting the scaling on click
      prevActiveItem.style.transform = 'scale(1)';
      this.style.transform = 'scale(1.1)';

      setTimeout(() => {
        prevActiveItem.classList.remove('active');
      }, 300); // Adjust this delay to match the transition duration in CSS

      const selectedItemText = this.textContent;
      console.log(`Selected item: ${selectedItemText}`);
      // Add logic to change the content below based on the selected item
    });
  });
});