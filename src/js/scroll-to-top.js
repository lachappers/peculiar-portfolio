const scrollToTopBtn = document.querySelector(".top-link");
const main = document.querySelector("[top-page]");

function topObserverCallback(payload) {
  if (payload[0].isIntersecting === true) {
    scrollToTopBtn.classList.remove("show-top");
  } else {
    scrollToTopBtn.classList.add("show-top");
  }
}

if (main && scrollToTopBtn) {
  const topObserver = new IntersectionObserver(topObserverCallback, {
    threshold: 0.75,
  });
  topObserver.observe(main);
}
