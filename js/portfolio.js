const
    swither = document.querySelector(".portfolio__swither"),
    switherButtons = document.querySelectorAll(".portfolio__swither-btn"),
    allPortfolioItems = document.querySelectorAll(".portfolio__item"),
    portfolioLists = document.querySelectorAll(".portfolio__list");

switherButtons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        let introBlock = document.querySelector(".intro");

        switherButtons.forEach(item => { item.classList.remove("active"); });
        btn.classList.add("active");

        portfolioLists.forEach((list, listIndex) => {
            if (listIndex === index) {
                list.classList.add("active");
            } else {
                list.classList.remove("active");
            }
        });
        if (window.screen.width > 768) {
            window.scrollTo(0, introBlock.clientHeight);
        } else {
            window.scrollTo(0, introBlock.clientHeight - 86);
        }

        if (this.dataset.switch) {
            this.parentElement.classList.add("switch");
        } else {
            this.parentElement.classList.remove("switch");
        }
    });
});

allPortfolioItems.forEach(item => {
    const portfolioTitle = item.querySelector(".portfolio__title");
    item.querySelector(".portfolio__bg").style.background = item.dataset.bgColor;
    if (portfolioTitle.dataset.titleColor) {
        portfolioTitle.style.color = portfolioTitle.dataset.titleColor;
    } else {
        portfolioTitle.style.color = item.dataset.bgColor;
    }

    item.itemSlider = new ProjectSlider(item.dataset.sliderClass, {
        "interval": 3000,
        "pagination": item.dataset.sliderClass + " .project__pagination"
    })
});

window.addEventListener("scroll", function () {
    let
        introBlock = document.querySelector(".intro"),
        portfolioBlock = document.querySelector(".portfolio");

    if (swither.getBoundingClientRect().y <= 35) {
        swither.classList.add("fixed");

        if (isVisible(introBlock) || !isVisible(portfolioBlock)) {
            swither.classList.remove("fixed");
        }
    }

    allPortfolioItems.forEach(item => {
        if (isVisible(item) && !item.itemSlider.playing) {
            item.itemSlider.autoplay();
        }
    });
});