"use strict";

///////////////////////////////////////
// Modal window
class ModalController {
    static modal = document.querySelector(".modal");
    static overlay = document.querySelector(".overlay");
    static btnCloseModal = document.querySelector(".btn--close-modal");
    static btnsOpenModal = document.querySelectorAll(".btn--show-modal");

    static openModal(e) {
        e.preventDefault();
        ModalController.modal.classList.remove("hidden");
        ModalController.overlay.classList.remove("hidden");
    }

    static closeModal() {
        ModalController.modal.classList.add("hidden");
        ModalController.overlay.classList.add("hidden");
    }
    static init() {
        ModalController.btnsOpenModal.forEach((btn) =>
            btn.addEventListener("click", ModalController.openModal)
        );

        ModalController.btnCloseModal.addEventListener(
            "click",
            ModalController.closeModal
        );
        ModalController.overlay.addEventListener(
            "click",
            ModalController.closeModal
        );

        document.addEventListener("keydown", function (e) {
            if (
                e.key === "Escape" &&
                !ModalController.modal.classList.contains("hidden")
            ) {
                closeModal();
            }
        });
    }
}

const smoothScrolling = (function () {
    const btnScrollTo = document.querySelector(".btn--scroll-to");
    const section1 = document.querySelector("#section--1");

    btnScrollTo.addEventListener("click", (e) => {
        section1.scrollIntoView({ behavior: "smooth" });
    });

    //Smooth scrolling for navigation 
    const link = document.querySelectorAll(".nav__link");
    const linkContainer = document.querySelector(".nav__links");
    linkContainer.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(e.target);

        //2. matching:match the event with the child that originated the events.
        if (e.target.classList.contains("nav__link")) {
            const id = e.target.getAttribute("href");
            console.log(id);

            // we get the id of the section we want to scroll to
            document.querySelector(id).scrollIntoView({ behavior: "smooth" });
        }
    });

})();

export default ModalController;
