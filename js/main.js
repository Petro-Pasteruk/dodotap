let menu = document.querySelector("#main-menu");

document.querySelector(".header__burger").addEventListener("click", function () {
    menu.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
});

document.querySelector(".main-menu__close").addEventListener("click", function () {
    menu.classList.remove("active");
    document.querySelector("body").style.overflow = "initial";
});

document.querySelector(".main-menu__shadow").addEventListener("click", function () {
    menu.classList.remove("active");
    document.querySelector("body").style.overflow = "initial";
});

document.querySelectorAll(".main-menu__languages").forEach(languageMenu => {
    languageMenu.querySelectorAll(".main-menu__language").forEach((item, index) => {
        let slider = languageMenu.querySelector(".main-menu__slider");

        item.addEventListener("click", function (e) {
            e.preventDefault();

            switch(index) {
                case 0:
                    slider.style.left = "-1px";
                    slider.style.transform = "translateX(0)";
                    break;

                case 1:
                    slider.style.left = "50%";
                    slider.style.transform = "translateX(-50%)";
                    break;

                case 2:
                    slider.style.left = "100%";
                    slider.style.transform = "translateX(calc(-100% + 1px))";
                    break;
            }
        });
    });
});

const contactBtn = document.querySelector(".contact-us__btn");

if (contactBtn) {
    contactBtn.addEventListener("click", function () {
        document.querySelector(".contact-modal").classList.add("active");
        document.querySelector("body").style.overflow = "hidden";
    });
}

document.querySelectorAll(".modal__shadow").forEach(shadow => {
    shadow.addEventListener("click", function () {
        this.parentElement.classList.remove("active");
        document.querySelector("body").style.overflow = "initial";
    });
});

document.querySelectorAll(".modal__close").forEach(btn => {
    btn.addEventListener("click", function () {
        this.parentElement.parentElement.classList.remove("active");
        document.querySelector("body").style.overflow = "initial";
    });
});

if (document.querySelector(".footer__top-wrap")) {
    document.querySelectorAll(".footer__top-wrap").forEach(btn => {
        btn.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });
    });
}


function isVisible (target) {
    const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },

        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    return targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right;
}