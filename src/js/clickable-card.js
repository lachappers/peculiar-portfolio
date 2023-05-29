const cards = document.querySelectorAll(".clickable-card");
Array.prototype.forEach.call(cards, (card) => {
  let down = card.querySelector(".portfolio-card-buttons :first-child");
  let up = card.querySelector(".portfolio-card-buttons :first-child");
  const link = card.querySelector(".portfolio-card-buttons :first-child");
  card.onmousedown = () => {
    down = +new Date();
  };
  card.onmouseup = () => {
    up = +new Date();
    if (up - down < 200) {
      link.click();
    }
  };
  card.style.cursor = "pointer";
});
