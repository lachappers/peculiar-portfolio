// import GuiDialog from "./dialog-features";

const readButtons = document.querySelectorAll(".modal-btn");
const closeButtons = document.querySelectorAll(".close-button");

closeButtons.forEach((button) => {
  const goal = button.closest("dialog");
  button.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();

    // console.log(goal);
    goal.close();
    // console.log(event.target.closest("dialog"));
  });
});

readButtons.forEach((button) => {
  const dialog = document.getElementById(button.dataset.modal);
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(dialog);
    dialog.showModal();
    document.addEventListener("click", (ev) => {
      // console.log(e.target.nodeName);
      if (ev.target.nodeName === "DIALOG") {
        // console.log(ev.target.nodeName);
        // if (ev.target.classList.contains("resume-modal")) {
        ev.target.close();
      }
    });
  });
});

// readButtons.forEach((button) => {
//   const dialog = document.getElementById(button.dataset.modal);
//   // GuiDialog(dialog);
//   button.addEventListener("click", (event) => {
//     if (typeof dialog.showModal === "function") {
//       event.preventDefault();
//       // dialog.show();
//       dialog.showModal();
//       console.log("hurrah!");
//       console.log(dialog.querySelector(".close-button"));
//       const closer = dialog.querySelector(".close-button");
//       closer.addEventListener("click", (e) => {
//         e.preventDefault();
//         dialog.close();
//         e.stopImmediatePropagation();
//       });
//       // dialog.addEventListener("click", ({ target: dialogTarget }) => {
//       //   if (dialogTarget.nodeName === "DIALOG") {
//       //     dialogTarget.close("dismiss");
//       //   }
//       // });
//     } else {
//       // eslint-disable-next-line no-console
//       console.log("The <dialog> AI is not supported by this browser");
//     }
//     event.stopImmediatePropagation();
//   });
// });

// class Dialog {
//   constructor(el) {
//     // store the dialog element
//     this.dialog = document.getElementById(el.dataset.modal);
//     // console.log(this.dialog);
//     // store the close button
//     this.close = this.dialog.querySelector(".close-button");

//     // store the open button
//     // this.open = document.getElementById(el.dataset.opener);
//     this.opener = el;
//     // console.log(this.opener);
//     // detect clicks on the open button
//     this.opener.addEventListener("click", (e) => this.openModal(e));
//     this.dialog.addEventListener("click", (event) => {
//       // if (event.target.nodeName === "DIALOG") {
//       //   this.dialog.close();
//       // }
//       if (event.target === this.dialog) {
//         this.dialog.close("dismiss");
//       }
//     });
//   }

//   openModal(e) {
//     // e.preventDefault();
//     this.dialog.showModal();
//     // this.close.addEventListener("click", (ev) => this.closeModal(ev));
//   }

//   closeModal(e) {
//     if (e.target.nodeName === "DIALOG") {
//       // e.preventDefault();
//       this.dialog.close("dismiss");
//     }
//     // this.dialog.close();
//   }
// }

// document.querySelectorAll(".modal-btn").forEach((el) => {
//   // eslint-disable-next-line no-new
//   new Dialog(el);
//   // console.log(el);
// });

// closeButtons.forEach((button) => {
//   const dialog = button.closest("dialog");
//   button.addEventListener("click", (e) => {
//     dialog.close();
//   });
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
