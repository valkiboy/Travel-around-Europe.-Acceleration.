const pageHeader = document.querySelector(".page-header");
const navToggle = document.querySelector(".main-nav__toggle");
const buyTour = document.querySelectorAll(".button--buy");
const overlay = document.querySelector(".overlay");
const modalBuy = document.querySelector(".modal--send");
const modalSucces = document.querySelector(".modal--succes");
const buttonSubmit = document.querySelector(".button--submit");
const modal = document.querySelector(".modal");

pageHeader.classList.add("page-header--closed");

navToggle.addEventListener("click", function () {
  if (pageHeader.classList.contains("page-header--closed")) {
    pageHeader.classList.remove("page-header--closed");
    pageHeader.classList.add("page-header--open");
  } else {
    pageHeader.classList.add("page-header--closed");
    pageHeader.classList.remove("page-header--open");
  }
});

const isEscapeKey = (evt) => {
  if (evt.key === "Escape") {
    return true;
  }
};

buttonSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay--open");
  modalSucces.classList.add("modal--open");
});

overlay.addEventListener('click', function() {
  modal.classList.remove("modal--open");
  overlay.classList.remove("overlay--open");
});
