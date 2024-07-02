let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function moveRight() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function updateCarousel() {
  const offset = -currentIndex * 100; // Adjust 100 to match slide width in percent
  document.getElementById('carousel-images').style.transform = `translateX(${offset}%)`;
}

// Event listeners for left and right buttons
document.querySelector('.carousel-button.left').addEventListener('click', moveLeft);
document.querySelector('.carousel-button.right').addEventListener('click', moveRight);
