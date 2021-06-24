let navMain = document.querySelector(".main-navigation");
let navToggle = document.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});

let modalLink = document.querySelector(".product__button");
let modalPopup = document.querySelector(".modal");

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if ( modalPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal--show");
    }
  }
});

// let modalLinkCut = document.querySelector(".assortment__icon");

// modalLinkCut.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   modalPopup.classList.add("modal--show");
// });
