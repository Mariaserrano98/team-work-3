window.addEventListener("load", function() {
const menuIcon = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", function() {
  // modal.style.display = "block";
  // menuIcon.style.display = "none";
  modal.classList.add("visible-menu")
  console.log("click");
});

closeBtn.addEventListener("click", function() {
  modal.classList.remove("visible-menu")
  // modal.style.display = "none";
  // menuIcon.style.display = "block";
});
// window.addEventListener("load", function() {
  // modal.style.display = "none";  
// });



  // Comprueba si la ventana es de escritorio
  if (window.innerWidth >= 992) {
    // Inserta los elementos fuera de la ventana modal
    const headerRight = document.querySelector(".header-right");
    
    // const menu = document.querySelector(".menu");
    // const icons = document.querySelector(".icons");
    // const buttons = document.querySelector(".buttons");
    // headerRight.insertBefore(icons, modal);
    // headerRight.insertBefore(buttons, modal);
  }

  // modal.style.display = "none";
});