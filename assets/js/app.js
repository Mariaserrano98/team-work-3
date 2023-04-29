window.addEventListener("load", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close");

  menuIcon.addEventListener("click", function () {
    modal.classList.add("visible-menu");
    console.log("click");
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("visible-menu");
  });

  // Comprueba si la ventana es de escritorio
  if (window.innerWidth >= 992) {
    // Inserta los elementos fuera de la ventana modal
    const headerRight = document.querySelector(".header-right");
  }
});

// scroll
