let mySlider = new StagesSlider(".stageSlider", {
    "interval": 8000,
    "autoplay": true,
    "pagination": ".stages__pagination",
    "controlsElement": ".stages__controls"
})

initialProjectBlock(".projects__item");
// initialClientsBlock(".clients__item");
initialFaqBlock(".faq__item");

const
    clients = document.getElementById('clients'),
    parallaxInstance = new Parallax(clients);