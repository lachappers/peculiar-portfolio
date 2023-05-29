const tabs = document.querySelectorAll(".nav-text");
const pages = document.querySelectorAll(".page");
// const scrollToTop = document.querySelector(".scrollToTop");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const index = Array.from(pages).indexOf(entry.target);
        tabs.forEach((tab) => {
          tab.classList.remove("rotate");
          // eslint-disable-next-line no-param-reassign
          tab.ariaCurrent = "false";
        });
        tabs[index].classList.add("rotate");
        tabs[index].ariaCurrent = "location";
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
