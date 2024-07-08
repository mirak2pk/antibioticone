let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

/* Merak */
let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth; // Assuming all slides are the same width

function moveLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  updateSlidePosition();
}

function moveRight() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const offset = -currentIndex * slideWidth;
  carouselImages.style.transform = `translateX(${offset}px)`;
}

// Optional: Auto slide
/*
setInterval(() => {
  moveRight();
}, 3000);
*/


// GROUPS

/**
 * // Get the element to click on
const viewElement = document.querySelector('.view-ePCBpJ');

// Add a click event listener
viewElement.addEventListener('click', function() {
    // Select the groups to slide
    const group44 = document.querySelector('.group-44-0Domfm');
    const group66 = document.querySelector('.group-66-0Domfm');
    const group43 = document.querySelector('.group-43-0Domfm');

    // Toggle a class that triggers sliding animation
    group44.classList.toggle('slide');
    group66.classList.toggle('slide');
    group43.classList.toggle('slide');
});
 */

/**
 * 
 * 

document.addEventListener('DOMContentLoaded', function() {
  // Get the element to click on
  const viewElement = document.querySelector('.view-ePCBpJ');
  
  // Track the current slide direction
  let isLeft = true; // Initial direction
  
  // Add a click event listener
  viewElement.addEventListener('click', function(event) {
      // Determine if clicked on the left or right half of .view-ePCBpJ
      const rect = viewElement.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const halfWidth = rect.width / 2;

      // Select the groups to slide
      const group44 = document.querySelector('.group-44-0Domfm');
      const group66 = document.querySelector('.group-66-0Domfm');
      const group43 = document.querySelector('.group-43-0Domfm');

      // Toggle classes for sliding animation based on click position
      if (clickX < halfWidth) {
          // Clicked on the left side
          if (!isLeft) {
              // If not already left, slide left
              group44.classList.add('slide-left');
              group66.classList.add('slide-left');
              group43.classList.add('slide-left');
              group44.classList.remove('slide-right');
              group66.classList.remove('slide-right');
              group43.classList.remove('slide-right');
              isLeft = true;
          }
      } else {
          // Clicked on the right side
          if (isLeft) {
              // If not already right, slide right
              group44.classList.add('slide-right');
              group66.classList.add('slide-right');
              group43.classList.add('slide-right');
              group44.classList.remove('slide-left');
              group66.classList.remove('slide-left');
              group43.classList.remove('slide-left');
              isLeft = false;
          }
      }
  });
});

 */


/**   document.addEventListener('DOMContentLoaded', function() {
  // Get the element to click on
  const viewElement = document.querySelector('.view-ePCBpJ');
  
  // Track the current slide direction
  let isLeft = true; // Initial direction
  
  // Select the groups to slide
  const group44 = document.querySelector('.group-44-0Domfm');
  const group66 = document.querySelector('.group-66-0Domfm');
  const group43 = document.querySelector('.group-43-0Domfm');

  // Function to show the current group and hide others
  function showGroup(groupToShow) {
      group44.classList.remove('slide-left', 'slide-right');
      group66.classList.remove('slide-left', 'slide-right');
      group43.classList.remove('slide-left', 'slide-right');

      if (groupToShow === group44) {
          group44.classList.add('slide-left');
          group66.classList.add('slide-left');
          group43.classList.add('slide-left');
          isLeft = true;
      } else if (groupToShow === group66) {
          group44.classList.add('slide-right');
          group66.classList.add('slide-right');
          group43.classList.add('slide-right');
          isLeft = false;
      } else if (groupToShow === group43) {
          // Additional logic if needed for group43
          group44.classList.add('slide-right');
          group66.classList.add('slide-right');
          group43.classList.add('slide-right');
          isLeft = false;
      }
  }

  // Add click event listeners to ellipses
  const ellipse12 = document.querySelector('.ellipse-12-9fwRnt');
  const ellipse13 = document.querySelector('.ellipse-13-9fwRnt');
  const ellipse14 = document.querySelector('.ellipse-14-9fwRnt');
  
  ellipse12.addEventListener('click', function() {
      showGroup(group44);
  });

  ellipse13.addEventListener('click', function() {
      showGroup(group66);
  });

  ellipse14.addEventListener('click', function() {
      showGroup(group43);
  });

  // Add click event listener for viewElement
  viewElement.addEventListener('click', function(event) {
      const rect = viewElement.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const halfWidth = rect.width / 2;

      if (clickX < halfWidth) {
          // Clicked on the left side
          if (!isLeft) {
              showGroup(group44);
          }
      } else {
          // Clicked on the right side
          if (isLeft) {
              showGroup(group66);
          } else {
              showGroup(group43);
          }
      }
  });

  // Initially show the first group (group44)
  showGroup(group44);
});
*/
 

 


