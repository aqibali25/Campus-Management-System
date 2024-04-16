const checkBox = document.getElementById("check");
const navAndSignup = document.getElementById("navAndSignup");
if (window.screen.width >= "768") {
  navAndSignup.style.width = "60%";
}
checkBox.addEventListener("change", () => {
  if (navAndSignup.style.width === "100%") {
    navAndSignup.style.width = "0%";
  } else {
    navAndSignup.style.width = "100%";
  }
});
