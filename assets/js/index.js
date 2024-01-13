/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll(".services__modal"),
  modalButton = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

console.log(modalButton);

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    activeModal(i);
  });
});

// Add a click event listener to each 'modalClose' element
modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      // Remove the 'active-modal' class from each of all modal
      modalRemove.classList.remove("active-modal");
    });
  });
});
/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    window.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);
