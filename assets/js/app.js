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




// seguir mirando lo del scroll
// scroll
// window.addEventListener('scroll', function() {
//   const header = document.querySelector('.sticky');
//   if (window.innerWidth >= 1280) {
//     header.classList.toggle('active', window.scrollY > 0);
//   }
// });


// // Obtiene la altura del contenido de la página
// const pageContentHeight = document.documentElement.scrollHeight - window.innerHeight;

// // scroll
// window.addEventListener('scroll', function() {
//   const header = document.querySelector('.sticky');
//   if (window.innerWidth >= 1280 && window.scrollY <= pageContentHeight) {
//     header.classList.toggle('active', window.scrollY > 0);
//   }
// });


//este es maas valido//
// window.addEventListener('scroll', function() {
//   const header = document.querySelector('.sticky');
//   const halfPageHeight = document.documentElement.clientHeight / 2;
//   if (window.innerWidth >= 1280 && window.scrollY <= halfPageHeight) {
//     header.classList.toggle('active', window.scrollY > 0);
//   }
// });


// window.addEventListener('scroll', function() {
//   const headerContainer = document.querySelector('.header-container');
//   const halfwayPoint = window.innerHeight / 2;
//   const scrolledPastHalfway = window.scrollY > halfwayPoint;
  
//   if (scrolledPastHalfway) {
//     headerContainer.classList.add('scrolled');
//   } else {
//     headerContainer.classList.remove('scrolled');
//   }
// });