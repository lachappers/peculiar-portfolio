const tabs = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
const scrollToTop = document.querySelector(".scrollToTop");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const index = Array.from(pages).indexOf(entry.target);
        tabs.forEach((tab) => {
          tab.classList.remove("rotate");
        });
        tabs[index].classList.add("rotate");
      }
    });
  },
  {
    threshold: 0.25,
  }
);

pages.forEach((page) => {
  observer.observe(page);
});
