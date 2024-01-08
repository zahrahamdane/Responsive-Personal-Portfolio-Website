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
