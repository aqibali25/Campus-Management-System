// Select the menuButton and navAndSignup elements
const menuButton = document.getElementById("menuButton");
const navAndSignup = document.getElementById("navAndSignup");

// Add click event listener to the menuButton
menuButton.addEventListener("click", function () {
  // Check if the window screen size is less than or equal to 768px
  if (window.innerWidth <= 768) {
    // Check if navAndSignup width === 0px
    if (navAndSignup.offsetWidth === 0) {
      // Set width for navAndSignup to 100%
      navAndSignup.style.width = "100%";
    } else {
      // Set width for navAndSignup to 0
      navAndSignup.style.width = "0";
    }
  } else {
    // If window size is greater than 768px, set navAndSignup width to 60%
    navAndSignup.style.width = "60%";
  }
});

//   IMAGE SHUFFLE

const images = document.querySelectorAll(".image-shuffle img");
let currentImageIndex = 0;

function shuffleImages() {
  images.forEach((image) => {
    image.style.display = "none";
  });

  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = "block";
}

// Shuffle images every 3 seconds
setInterval(shuffleImages, 3000);

// Show the first image at Start
images[currentImageIndex].style.display = "block";

// Animation on Load
AOS.init({
  duration: 1000,
});
AOS.init({
  offset: 200,
  duration: 600,
  easing: "ease-in-sine",
  delay: 100,
});
