//your JS code here. If required.
 const slides = document.querySelectorAll('.slider-container');
      let currentSlide = 0;
      const nextSlide = () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      };
      const prevSlide = () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
      };
      document.querySelector('.down-button').addEventListener('click', nextSlide);
      document.querySelector('.up-button').addEventListener('click', prevSlide);