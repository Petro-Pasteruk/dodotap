class ProjectSlider {
    constructor(setupClass, setting) {
        this.slider = document.querySelector(setupClass);
        this.slides = this.slider.querySelectorAll(".project__slide");
        this.transition = setting.transition ? setting.transition / 1000 + "s" : "1s";
        this.interval = setting.interval ? setting.interval : 3000;
        this.autoplayValue = setting.autoplay ? setting.autoplay : false;
        this.pagination = setting.pagination ? document.querySelector(setting.pagination) : null;
        this.playing = false;

        this.init();
    }

    init () {
        this.slides.forEach((slide, index) => {
            if (index === 0) {
                slide.classList.add("active");
            }
            slide.style.transition = this.transition;
        });

        if (this.autoplayValue) { this.autoplay() }

        if (this.pagination) {
            this.paginationItems = this.pagination.querySelectorAll("li");
            this.activePagination = this.paginationItems[0];
            this.heightOneItem = this.paginationItems[1].clientHeight;
            this.paginationItems[0].classList.add("active");
            this.paginationPrevIndex = 0;
            this.activeSlide = this.paginationItems[0];

            this.onClickPagination();
        }
    }

    nextSlide () {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains("active")) {
                if (i+1 < this.slides.length) {
                    this.activeSlide = this.slides[i+1];

                    if (this.pagination) {
                        let itemScrollWidth = this.heightOneItem + this.activePagination.clientHeight;

                        this.paginationPrevIndex = i+1;
                        this.paginationItems[i+1].style.transform = "translateY( -" +  itemScrollWidth  + "px)";
                        this.activePagination.style.transform = "translateY(" + this.heightOneItem * 2 * (i+1) + "px)";
                    }

                    this.slides[i].classList.remove("active");
                    this.slides[i+1].classList.add("active");
                } else {
                    this.activeSlide = this.slides[0];

                    if (this.pagination) {
                        for (let j = 0; j < this.paginationItems.length; j++) {
                            if (!this.paginationItems[this.paginationItems.length - j - 1].classList.contains("active")) {

                                this.paginationItems[this.paginationItems.length - j - 1].style.transform = "translateY(0)";
                                this.activePagination.style.transform = "translateY(0)";
                            }
                        }
                        this.paginationPrevIndex = 0;
                    }

                    this.slides[i].classList.remove("active");
                    this.slides[0].classList.add("active");
                }
                i = this.slides.length;
            }
        }
    }

    prevSlide () {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains("active")) {
                if (i-1 >= 0) {
                    this.activeSlide = this.slides[i-1];

                    if (this.pagination) {
                        this.paginationItems[i].style.transform = "translateY(0)";
                        this.activePagination.style.transform = "translateY(" + this.heightOneItem * 2 * (i-1)  + "px)";

                        this.paginationPrevIndex = i;
                    }
                    this.slides[i].classList.remove("active");
                    this.slides[i-1].classList.add("active");

                } else {
                    this.activeSlide = this.slides[this.slides.length - 1];

                    if (this.pagination) {
                        let itemScrollWidth = this.heightOneItem + this.activePagination.clientHeight;

                        for (let j = 0; j < this.paginationItems.length; j++) {
                            if (!this.paginationItems[j].classList.contains("active")) {
                                this.paginationItems[j].style.transform = "translateY( -" +  itemScrollWidth  + "px)";
                                this.activePagination.style.transform = "translateY(" + this.heightOneItem * 2 * j  + "px)";
                            } else {
                                this.activePagination.style.transform = "translateY(" + this.heightOneItem * 2 * j  + "px)";
                            }
                            this.paginationPrevIndex = this.paginationItems.length;
                        }
                    }

                    this.slides[i].classList.remove("active");
                    this.slides[this.slides.length - 1].classList.add("active");
                }
                i = this.slides.length;
            }
        }
    }

    onClickPagination () {
        this.paginationItems.forEach((item, index) => {
            if (!item.classList.contains("active")) {
                item.addEventListener("click", () => {
                    this.slides.forEach(slide => {
                        slide.classList.remove("active");
                    });
                    if (this.pagination) {
                        if (this.paginationPrevIndex >= index) {
                            this.slides[index - 1].classList.add("active");
                            this.activeSlide = this.slides[index - 1];

                            this.stopAutoplay();
                            this.autoplay();

                            for (let i = 0; i < this.slides.length; i++) {
                                if (i === index) {
                                    this.paginationPrevIndex = i - 1;
                                }
                                if (i < this.paginationPrevIndex) {
                                    let itemScrollWidth = this.heightOneItem + this.activePagination.clientHeight;

                                    this.paginationItems[i].style.transform = "translateY( -" + itemScrollWidth + "px)";
                                    this.activePagination.style.transform = "translateY(" + this.heightOneItem * 2 * (i) + "px)";
                                } else {
                                    this.paginationItems[i].style.transform = "translateY(0)";
                                }
                            }
                        } else {
                            this.slides[index].classList.add("active");
                            this.activeSlide = this.slides[index];

                            this.stopAutoplay();
                            this.autoplay();

                            for (let i = 0; i <= index; i++) {
                                let itemScrollWidth = this.heightOneItem + this.activePagination.clientHeight;
                                this.paginationItems[i].classList.remove("prev");

                                if (i === index) {
                                    this.paginationPrevIndex = i;
                                }
                                this.paginationItems[i].style.transform = "translateY( -" + itemScrollWidth + "px)";
                                this.activePagination.style.transform = "translateY(" + this.heightOneItem * 2 * (i) + "px)";
                            }
                        }
                    }
                });
            }
        });
    }

    autoplay () {
        this.playing = true;
        this.intervalFunction = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }

    stopAutoplay () {
        this.playing = false;
        clearInterval(this.intervalFunction);
    }

    goToFirstSlide () {
        this.slides.forEach(slide => {
            slide.classList.remove("active");
        });

        this.slides[0].classList.add("active");
        this.activeSlide = this.slides[0];

        this.paginationItems.forEach(item => {
            item.style.transform = "translateY(0)";
        });
        this.paginationPrevIndex = 0;
    }
}