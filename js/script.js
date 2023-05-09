// const hamburger = document.querySelector(".hamburger");
// const navigation = document.querySelector(".navigation");

// hamburger.addEventListener("click", function () {
//   navigation.classList.toggle("open");
// });

const expandable = document.getElementsByClassName("read-more");

expandable.addEventListener("click", expand());

function expand() {
  var read = document.getElementsByClassName("read-more");
  var moreText = document.getElementsByClassName("more");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    read.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    moreText.style.display = "none";
    read.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
