// SLIDER

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// NAV
const navContainer = document.getElementById("nav-container");
const navToggle = document.getElementById("open");
const navClose = document.getElementById("close");

// Showing nav__container

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navContainer.classList.add("show-menu");
  });
}
// Closing nav__container
if (navClose) {
  navClose.addEventListener("click", () => {
    navContainer.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-container");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));


/*=============== SCROLL-HEADER ===============*/
const navHeader = document.getElementById("header");

function headerSticky() {
  const scrollY = window.pageYOffset;

  if (scrollY > 50) {
    navHeader.classList.add("scroll-header");
  } else {
    navHeader.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", headerSticky);


/*========== CHANGE LINK COLOR WITH SCROLLING ==========*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 300;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__container a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__container a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

