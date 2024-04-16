const checkBox = document.getElementById("check");
const navAndSignup = document.getElementById("navAndSignup");

checkBox.addEventListener("change", () => {
  if (navAndSignup.style.width === "100%") {
    navAndSignup.style.width = "0%";
  } else {
    navAndSignup.style.width = "100%";
  }
});
