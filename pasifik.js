const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");
const btnDiv = document.querySelector(".btn-div");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  btnDiv.classList.toggle("active");
  hamburger.classList.toggle("active");
});
