import GuiDialog from "./dialog-features";

const readButtons = document.querySelectorAll(".modal-btn");
const closeButtons = document.querySelectorAll(".close-button");

readButtons.forEach((button) => {
  const dialog = document.getElementById(button.dataset.modal);
  GuiDialog(dialog);
  button.addEventListener("click", (event) => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      // console.log("hurrah!");

      dialog.addEventListener("click", ({ target: dialogTarget }) => {
        if (dialogTarget.nodeName === "DIALOG") {
          dialogTarget.close("dismiss");
        }
      });
    } else {
      console.log("The <dialog> AI is not supported by this browser");
    }
    event.stopImmediatePropagation();
  });
});

closeButtons.forEach((button) => {
  const goal = button.closest("dialog");
  button.addEventListener("click", (event) => {
    console.log(goal);
    goal.close();
    event.stopImmediatePropagation();
  });
});

// document.addEventListener("click", (e) => {
//   console.log(e.target.nodeName);
//   if (e.target.nodeName == "DIALOG") {
//     console.log(e.target.nodeName);
//     if (e.target.classList.contains("resume-modal")) {
//       e.target.close();
//     }
//     return;
//   } else {
//     return;
//   }
// });

// dialogs.forEach((dialog) =>{
//     dialog.addEventListener
// })

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
