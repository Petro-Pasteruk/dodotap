const technologySlider = new Swiper(".technologySlider", {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    effect: "fade",
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".technology-pagination",
        clickable: true,
    },
});