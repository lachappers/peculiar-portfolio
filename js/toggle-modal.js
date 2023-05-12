// const modal = document.getElementById;

window.openModal = function (modalID) {
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  document.getElementsByTagName("body")[0].ariaHidden = "true";
  const element = document.getElementById(modalID);
  element.style.display = "block";
  element.ariaHidden = "false";
};
window.closeModal = function (modalID) {
  const element = document.getElementById(modalID);

  document.getElementsByTagName("body")[0].style.overflowY = "auto";
  document.getElementsByTagName("body")[0].ariaHidden = "false";
  element.style.display = "none";
  element.ariaHidden = "true";
};

// Close all modals when press ESC
document.onkeydown = function (event) {
  event = event || window.event;
  if (event.keyCode === 27) {
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    let modals = document.getElementsByClassName("modal-container");
    Array.prototype.slice.call(modals).forEach((i) => {
      i.style.display = "none";
      i.ariaHidden = "true";
    });
  }
};

// const expandable = document.getElementsByClassName("read-more");

// expandable.addEventListener("click", expand());

// function expand() {
//   var read = document.getElementsByClassName("read-more");
//   var moreText = document.getElementsByClassName("more");

//   if (moreText.style.display === "none") {
//     moreText.style.display = "inline";
//     read.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     moreText.style.display = "none";
//     read.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }
