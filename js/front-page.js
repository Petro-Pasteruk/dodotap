const teamSwiper = new Swiper(".team-swiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000
    },
    navigation: {
        nextEl: ".team-button-next",
        prevEl: ".team-button-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 3
        }
    }
});
const serviceSwiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

initialProjectBlock(".projects__item");
// initialClientsBlock(".clients__img-wrap");

const
    clients = document.getElementById('clients'),
    parallaxInstance = new Parallax(clients);