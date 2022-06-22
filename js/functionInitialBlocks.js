function initialProjectBlock(projectItemClass) {
    const allProjectSliders = [];

    document.querySelectorAll(projectItemClass).forEach((button, index) => {
        allProjectSliders.push(new ProjectSlider(button.dataset.sliderClass, {
            "autoplay": index === 0,
            "interval": 3000,
            "pagination": button.dataset.sliderClass + " .project__pagination"
        }));

        button.addEventListener("click", function () {
            const
                allButtons = document.querySelectorAll(".projects__item"),
                // projects = document.querySelector(".projects-all"),
                // marginBottom = 165,
                allProjects = document.querySelectorAll(".project"),
                // heightOneScroll = (document.querySelector(".project").clientHeight + marginBottom) * index,
                background = document.querySelector(".projects__content-bg");

            allButtons.forEach(item => {
                item.classList.remove("active");
            });
            this.classList.add("active");

            // projects.style.transform = "translateY(-" + heightOneScroll + "px)";
            allProjects.forEach(project => {
                project.classList.remove("active");
                project.querySelector(".project__link").classList.remove("active");
            });
            document.querySelector(this.dataset.sliderClass).classList.add("active");
            setTimeout(() => {
                document.querySelector(this.dataset.sliderClass + " .project__link").classList.add("active");
            }, 1000)

            background.style.background = this.dataset.color;

            allProjectSliders.forEach(slider => {
                slider.goToFirstSlide();
                slider.stopAutoplay();
            });

            allProjectSliders[index].autoplay();
        });
    });
}

// function initialClientsBlock (clientsItemClass) {
//     document.querySelectorAll(clientsItemClass).forEach(item => {
//         item.addEventListener("mouseover", function () {
// this.classList.add("active");
// document.querySelectorAll(".clients__item").forEach(subItem => {
//     subItem.classList.add("hide");
// });
// this.classList.remove("hide");
// });
//
// item.addEventListener("mouseout", function () {
// this.classList.remove("active");
// document.querySelectorAll(".clients__item").forEach(subItem => {
//     subItem.classList.remove("hide");
// });
//         });
//     });
// }

function initialFaqBlock(faqItemClass) {
    const allFaqItems = document.querySelectorAll(faqItemClass);

    allFaqItems.forEach(faqItem => {
        faqItem.querySelector(".faq__heading").addEventListener("click", function () {
            allFaqItems.forEach(item => {
                if (item === faqItem) {
                    item.classList.add("open");
                } else {
                    item.scrollTo(0, 0);
                    item.classList.remove("open");
                }
            });
        });
    });
}

function initialWebsiteBlock(switherClass, switherButtonClass, switherItemClass, switherCirceClass) {
    const
        switherWrapper = document.querySelector(switherClass),
        switherCircle = document.querySelector(switherCirceClass),
        allSwitherButtons = document.querySelectorAll(switherButtonClass),
        allSwitherItems = document.querySelectorAll(switherItemClass);

    allSwitherButtons.forEach((btn, btnIndex) => {
        btn.addEventListener("mouseover", function () {
            if (!this.classList.contains("active")) {
                switherWrapper.style.backgroundColor = this.dataset.bgColor;

                allSwitherButtons.forEach(button => {
                    if (button === this) {
                        button.classList.add("active");
                    } else {
                        button.classList.remove("active");
                    }
                });
                allSwitherItems.forEach((item, itemIndex) => {
                    if (itemIndex === btnIndex) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });

                if (((btnIndex + 1) % 2) === 0) {
                    switherCircle.style.transform = "translate(-50%, -50%) scale(1.1)";
                } else {
                    switherCircle.style.transform = "translate(-50%, -50%) scale(1)";
                }
            }
        });
    });
}