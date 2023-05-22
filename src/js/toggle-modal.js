const modals = document.querySelector("dialog");

let readButtons = document.querySelectorAll(".read-more-btn");
let closeButtons = document.querySelectorAll(".close-button");
const dialog = document.querySelector("dialog");
const closestDialog = this.closest("dialogue");

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
  let goal = document.querySelector("dialog");
  button.addEventListener("click", (event) => {
    console.log(goal);
    button.closest("dialog").close();
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
    closestDialog.close();
  }
});

// const closeBtn = document.getElementsByClassName("close-button");

// window.openModal = function (modalID) {
//   document.getElementsByTagName("body")[0].style.overflowY = "hidden";
//   document.getElementsByTagName("body")[0].ariaHidden = "true";
//   const element = document.getElementById(modalID);
//   element.style.display = "block";
//   element.ariaHidden = "false";
// };
// // window.closeModal = function (modalID) {
// //   const element = document.getElementById(modalID);

// //   document.getElementsByTagName("body")[0].style.overflowY = "auto";
// //   document.getElementsByTagName("body")[0].ariaHidden = "false";
// //   element.style.display = "none";
// //   element.ariaHidden = "true";
// // };

// // Close all modals when press ESC
// document.onkeydown = function (event) {
//   event = event || window.event;
//   if (event.keyCode === 27) {
//     document.getElementsByTagName("body")[0].style.overflowY = "auto";
//     let modals = document.getElementsByClassName("modal-container");
//     Array.prototype.slice.call(modals).forEach((i) => {
//       i.style.display = "none";
//       i.ariaHidden = "true";
//     });
//   }
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// export function openModal(modalID) {
//   document.getElementsByTagName("body")[0].style.overflowY = "hidden";
//   document.getElementsByTagName("body")[0].ariaHidden = "true";
//   const element = document.getElementById(modalID);
//   element.style.display = "block";
//   element.ariaHidden = "false";
// }

// export function closeModal(modalID) {
//   const element = document.getElementById(modalID);

//   document.getElementsByTagName("body")[0].style.overflowY = "auto";
//   document.getElementsByTagName("body")[0].ariaHidden = "false";
//   element.style.display = "none";
//   element.ariaHidden = "true";
// }
