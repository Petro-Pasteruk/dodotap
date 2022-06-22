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

switherSlider.on("slideChange", function () {
    const websites = document.querySelector(".websites");
    let activeSlider = this.slides[this.activeIndex];

    websites.style.backgroundColor = activeSlider.dataset.bgColor;
});

const
    clients = document.getElementById('clients'),
    parallaxInstance = new Parallax(clients);