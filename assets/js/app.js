console.log('Hello World!');

const menuIcon = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", function() {
  modal.style.display = "block";
  menuIcon.style.display = "none";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  menuIcon.style.display = "block";
});