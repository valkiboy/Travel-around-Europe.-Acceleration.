const pageHeader = document.querySelector(".page-header");
const navToggle = document.querySelector(".main-nav__toggle");
const buyTour = document.querySelectorAll(".button--buy");
const overlay = document.querySelector(".overlay");
const modalBuy = document.querySelector(".modal--send");
const modalSucces = document.querySelector(".modal--succes");
const modalToggleBuy = document.querySelector(".modal__toggle--buy");
const modalToggleSucces = document.querySelector(".modal__toggle--succes");
const buttonSubmit = document.querySelector(".button--submit");
const modal = document.querySelector(".modal");
const form = document.querySelectorAll(".form");
const tabs = document.querySelector(".tabs");
const tab = document.querySelectorAll(".tab");
// const tabTitles = document.querySelector(".description__nav-list");
const tabTitle = document.querySelectorAll(".description__nav-item"); //description__nav-item--current
const tabContent = document.querySelectorAll(".description__wrapper");

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

//проверяем что нажата кнопка эскейп

const isEscapeKey = (evt) => {
  if (evt.key === "Escape") {
    return true;
  }
};

//открываем оверлей и попап продажи

const getOpenModalBuy = () => {
  overlay.classList.add("overlay--open");
  modalBuy.classList.add("modal--open");
};

//открываем оверлей и попап отправки

const getOpenModalSucces = () => {
  overlay.classList.add("overlay--open");
  modalSucces.classList.add("modal--open");
};

//закрываем оверлей

const getCloseOverlay = () => {
  overlay.classList.remove("overlay--open");
};

//закрываем оверлей и попап

const getCloseModalBuy = () => {
  modalBuy.classList.remove("modal--open");
};

const getCloseModalSucces = () => {
  modalSucces.classList.remove("modal--open");
};

//закрываем попап и оверлей кнопкой эскейп

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    getCloseModalSucces();
    getCloseModalBuy();
    getCloseOverlay();
  }
};

//Навешиваем на все кнопки покупок событие клика и открываем попап

buyTour.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    getOpenModalBuy();
    document.addEventListener("keydown", onSuccessEscKeydown);
  });
});

//закрываем попап по клику на оверлей

overlay.addEventListener("click", function(evt) {
  if (evt.target === this) {
    getCloseModalBuy();
    getCloseModalSucces();
    getCloseOverlay();
  }
});

//навешиваем событие клик на кнопку закрытия попапа продажи

modalToggleBuy.addEventListener("click", function() {
  getCloseModalBuy();
  getCloseOverlay();
});

//навешиваем событие клик на кнопку закрытия попапа отправки

modalToggleSucces.addEventListener("click", function() {
  getCloseModalSucces();
  getCloseOverlay();
});

//открываем попап если форма заполнена правильно

const dataPostSuccess = () => {
  getOpenModalSucces();
  getCloseModalBuy();
};


//перехватываем отправку формы и открываем попап с дальнейшей отправкой формы

const onFormSubmit = (evt) => {
  evt.preventDefault();
  dataPostSuccess();
  // new FormData(evt.target);
};

//Навешиваем на кнопку отправить событие клик открываем попап

form.forEach(function (item) {
  item.addEventListener("submit", onFormSubmit);
});

const getDeliteTabTitleCurrentStyle = () => {
  tabTitle.forEach(function (item) {
    item.classList.remove("description__nav-item--current");
  });
};

const getDeliteTabContentCurrentStyle = () => {
  tabContent.forEach(function (item) {
    item.classList.remove("description__wrapper--current");
  });
};

const getAddTabTitleCurrentStyle = (item) => {
  let numb = tabTitle.length;
    for (let i = 0; i < numb; i++) {
      if (i == item) {
        tabTitle[i].classList.add("description__nav-item--current");
      }
    }
};

const getAddTabContentCurrentStyle = (item) => {
  let numb = tabContent.length;
    for (let i = 0; i < numb; i++) {
      if (i == item) {
        tabContent[i].classList.add("description__wrapper--current");
      }
    }
};

tab.forEach(function (item) {
  item.addEventListener("click", function(evt) {
    let numb = tab.length;

      for (let i=0; i<numb; i++) {
        if (evt.currentTarget == tab[i]) {
        getDeliteTabTitleCurrentStyle();
        getDeliteTabContentCurrentStyle();
        getAddTabTitleCurrentStyle(i);
        getAddTabContentCurrentStyle(i);
        break;
      }
    }
  });
});

tabTitle.forEach(function (item) {
  item.addEventListener("click", function(evt) {
    let numb = tabTitle.length;

    for (let i=0; i<numb; i++) {
      if (evt.currentTarget == tabTitle[i]) {
      getDeliteTabTitleCurrentStyle();
      getDeliteTabContentCurrentStyle();
      getAddTabTitleCurrentStyle(i);
      getAddTabContentCurrentStyle(i);
      break;
      }
    }
  });
});



//   console.log(`Кнопка: ${evt.which}`);
//   console.log(`Координаты: (${evt.x};${evt.y})`);
//   console.log(`Тип события: ${evt.type}`);
//   console.log(`Тег элемента: ${evt.currentTarget.tagName}`);
//   console.log(`Тег элемента: ${evt.currentTarget.className}`);
