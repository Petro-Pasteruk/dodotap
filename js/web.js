let mySlider = new StagesSlider(".stageSlider", {
  interval: 8000,
  autoplay: true,
  pagination: ".stages__pagination",
  controlsElement: ".stages__controls",
});

initialProjectBlock(".projects__item");
// initialClientsBlock(".clients__item");
initialFaqBlock(".faq__item");
initialWebsiteBlock(
  ".websites",
  ".swither__btn",
  ".swither__item",
  ".swither__circle"
);

const switherSlider = new Swiper(".switherSlider", {
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swither-pagination",
    clickable: true,
  },
});

switherSlider.on("transitionEnd", function () {
  const websites = document.querySelector(".websites");

  if (switherSlider.realIndex == 0) {
    websites.style.backgroundColor = "rgb(45, 103, 238)";
  } else if (switherSlider.realIndex == 1) {
    websites.style.backgroundColor = "rgb(95, 124, 81)";
  } else if (switherSlider.realIndex == 2) {
    websites.style.backgroundColor = "rgb(53, 53, 53)";
  }
});
