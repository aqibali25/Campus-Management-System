const menuButton = document.getElementById("menuButton");
const navAndSignup = document.getElementById("navAndSignup");

menuButton.addEventListener("click", () => {
  if (navAndSignup.style.width === "0px") {
    navAndSignup.style.width = "100%";
  }
  if ((navAndSignup.style.width = "100%")) {
    navAndSignup.style.width = "0px";
  }
});
