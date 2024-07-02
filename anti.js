console.log('JavaScript file loaded');

let currentIndex = 0;

function moveLeft() {
    console.log('Move left called');
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;

    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
}

function moveRight() {
    console.log('Move right called');
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;

    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

function updateCarousel() {
    console.log('Update carousel called');
    const carouselImages = document.querySelector('.carousel-images');
    const offset = -currentIndex * 100; // 100% width of each image
    carouselImages.style.transform = `translateX(${offset}%)`;
}
