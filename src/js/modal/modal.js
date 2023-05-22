// import { openModal, closeModal } from "./toggle-modal";
const modals = document.querySelector("dialog");

let readButtons = document.querySelectorAll(".read-more-btn");
let closeButtons = document.querySelectorAll(".close-button");
const dialog = document.querySelector("dialog");

readButtons.forEach((button) => {
  let goal = document.getElementById(button.dataset.modal);
  button.addEventListener("click", (event) => {
    if (typeof goal.showModal === "function") {
      goal.showModal();
      console.log("hurrah!");
    } else {
      console.log("The <dialog> AI is not supported by this browser");
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(dialog);
    dialog.close();
  });
});

dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});
