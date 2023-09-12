"use strict";

///////////////////////////////////////
// Modal window
class ModalController {
   static modal = document.querySelector(".modal");
   static overlay = document.querySelector(".overlay");
   static btnCloseModal = document.querySelector(".btn--close-modal");
   static btnsOpenModal = document.querySelectorAll(".btn--show-modal");

    static openModal() {
        ModalController.modal.classList.remove("hidden");
        ModalController.overlay.classList.remove("hidden");
    }

    static closeModal() {
        ModalController.modal.classList.add("hidden");
        ModalController.overlay.classList.add("hidden");
    }
    static init() {
        for (let i = 0; i < ModalController.btnsOpenModal.length; i++)
            ModalController.btnsOpenModal[i].addEventListener("click", ModalController.openModal);

        ModalController.btnCloseModal.addEventListener("click", ModalController.closeModal);
        ModalController.overlay.addEventListener("click", ModalController.closeModal);

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !ModalController.modal.classList.contains("hidden")) {
                closeModal();
            }
        });
    }
}

export default ModalController