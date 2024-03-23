document.addEventListener("DOMContentLoaded", function () {
  const studentButton = document.querySelector(".student");
  const employeeButton = document.querySelector(".employee");
  const portalTitle = document.getElementById("portalTitle");

  const userChoice = sessionStorage.getItem("userChoice");
  if (userChoice === "student") {
    studentButton.classList.add("active");
    employeeButton.classList.remove("active");
    portalTitle.innerHTML = "@Student Portal";
  } else if (userChoice === "employee") {
    employeeButton.classList.add("active");
    studentButton.classList.remove("active");
    portalTitle.innerHTML = "@Employee Portal";
  }

  // Add click event listeners to buttons
  studentButton.addEventListener("click", function (event) {
    event.preventDefault();
    employeeButton.classList.remove("active");
    studentButton.classList.add("active");
    portalTitle.innerHTML = "@Student Portal";
    sessionStorage.setItem("userChoice", "student");
  });

  employeeButton.addEventListener("click", function (event) {
    event.preventDefault();
    studentButton.classList.remove("active");
    employeeButton.classList.add("active");
    portalTitle.innerHTML = "@Employee Portal";
    sessionStorage.setItem("userChoice", "employee");
  });
});
