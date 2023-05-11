// const modal = document.getElementById;

window.openModal = function (modalID) {
  document.getElementById(modalID).style.display = "block";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
};
window.closeModal = function (modalID) {
  document.getElementById(modalID).style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "auto";
};

// Close all modals when press ESC
document.onkeydown = function (event) {
  event = event || window.event;
  if (event.keyCode === 27) {
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    let modals = document.getElementsByClassName("modal");
    Array.prototype.slice.call(modals).forEach((i) => {
      i.style.display = "none";
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
