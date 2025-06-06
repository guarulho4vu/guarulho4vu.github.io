window.addEventListener("scroll", onScroll);
let nav = document.querySelectorAll("#navigation");
let buttonBackToTop = document.querySelectorAll("#backToTopButton");

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    nav.forEach(navi => {
      navi.classList.add("scroll")
    })
  } else {
    nav.forEach(navi =>{
      navi.classList.remove("scroll")
    });
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    buttonBackToTop.forEach(buttonBackTop => {
      buttonBackTop.classList.add("show")
    })
  } else {
    buttonBackToTop.forEach(buttonBackTop => {
      buttonBackTop.classList.remove("show")
    });
  }
}

function openMenu() {
    document.body.classList.add("menu-expanded");
}
  
  function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home .header__img, 
  #home .stats, 
  #projects,
  #projects header,
  #projects .card,
  #about,
  #about header,
  #about .content,
  #gallery,
  #gallery header,
  #gallery .content,
  footer`);
  