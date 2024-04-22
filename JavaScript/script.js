const checkBox = document.getElementById("check");
const navAndSignup = document.getElementById("navAndSignup");

checkBox.addEventListener("change", () => {
  if (navAndSignup.style.width === "100%") {
    navAndSignup.style.width = "0%";
  } else {
    navAndSignup.style.width = "100%";
  }
});

let slideIndex = 0;
const slides = document.querySelectorAll(".trandingImages img");
const totalSlides = slides.length;
let intervalId;

showSlides();

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.width = "100%";
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
}

// function prevSlide() {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = totalSlides - 1;
//   }
//   showSlides();
// }

// function nextSlide() {
//   slideIndex++;
//   if (slideIndex >= totalSlides) {
//     slideIndex = 0;
//   }
//   showSlides();
// }
