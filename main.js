// Menu
const menuToggler = document.querySelector(".nav__menu-toggler");
const menu = document.querySelector(".main__nav");
const closeMenuToggler = document.querySelector(".nav__menu-close-btn");

// Hero slider
const slides = document.querySelectorAll(".hero__section-slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const els = document.getElementsByClassName("step");

// Staff
const staffBtn = document.querySelector(".staff__section-btn");
const customerPrev = document.querySelector(".customer__prev");
const customerNext = document.querySelector(".customer__next");
const parentDiv = document.querySelector(".testimony");
const child = document.querySelector(".customer__container");

menuToggler.addEventListener("click", toggleMenu);
closeMenuToggler.addEventListener("click", toggleCloseMenu);
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
staffBtn.addEventListener("click", showMoreStaff);
customerNext.addEventListener("click", () => slideTo("next"));
customerPrev.addEventListener("click", () => slideTo("prev"));

let slideLength = slides.length;
let currentSlide = 0;

function toggleMenu() {
  menu.classList.toggle("show__nav");
}
function toggleCloseMenu() {
  menu.classList.toggle("show__nav");
}

function showMoreStaff() {
  const staffCard = document.querySelectorAll(".staff__card");
    staffCard.forEach((card) => {
    if (card.classList.contains("hidden__card")) {
      card.classList.toggle("hide__card");

      if(card.classList.contains("hide__card")){
        staffBtn.innerHTML = 'Show less'
      }else{
        staffBtn.innerHTML = 'Shore more'
      }
    }
  });
}

function prevSlide() {
  hideAllSlides();
  if (currentSlide == 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  slides[currentSlide].classList.add("active");
  progress(currentSlide);
  console.log(currentSlide)
}

function nextSlide() {
  hideAllSlides();
  if (currentSlide == slideLength - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides[currentSlide].classList.add("active");
  progress(currentSlide);
}

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("active");
    slide.classList.add("hide");
  }
}

// Hero slide
let steps = [];

Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
  progress(0);
});

function progress(stepNum) {
  let p = 0;
  p = stepNum * 50; 

  

  document.querySelector(".percent").style.height = `${p}%`;
  steps.forEach((e) => {
    if (e.id == stepNum + 1) {
      e.classList.add("selected");
      e.classList.add("completed");
    }
    if (e.id < stepNum + 1) {
      e.classList.add("completed");
    }
    if (e.id > stepNum + 1) {
      e.classList.remove("selected", "completed");
    }
  });
}

// Testimony Slides
function slideTo(direction) {
  const width = child.parentNode.getBoundingClientRect();
  if(direction === 'next'){
    child.scrollLeft += width.width + 16
   }else{
    child.scrollLeft -= width.width + 16
  }
}
