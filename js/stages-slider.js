class StagesSlider {
    constructor(setupClass, setting) {
        this.slider = document.querySelector(setupClass);
        this.slides = this.slider.querySelectorAll(".stages__slide");
        if (setting.pagination) {
            this.pagination = this.slider.querySelector(setting.pagination);
        }

        this.interval = setting.interval ? setting.interval : 3000;
        this.autoplay = setting.autoplay ? setting.autoplay : false;

        this.controlsElement = setting.controlsElement ? document.querySelector(setting.controlsElement) : null;

        this.init();
    }

    init() {
        this.slides.forEach((slide, index) => {
            if (index === 0) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        if (this.pagination) {
            this.initPagination();
        }
        if (this.autoplay) {
            this.startAutoplay();
        }

        if (this.controlsElement) {
            this.initToggleButtons();
            this.initSlideIndicator();
        }
    }

    nextSlide() {
        this.reloadAutoplay();
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains("active")) {
                this.slides[i].classList.remove("active");

                if ((i + 2) <= this.slides.length) {
                    this.slides[i + 1].classList.add("active");
                    if ((i + 2) < 10) {
                        this.activeSlideIndicator.textContent = "0" + (i + 2);
                    } else {
                        this.activeSlideIndicator.textContent = "" + (i + 2);
                    }
                    if (this.pagination) {
                        this.paginationProgressBar.style.width = this.oneStep * (i + 2) + "%";
                        this.paginationSteps.forEach((step, stepIndex) => {
                            if ((i + 1) >= stepIndex) {
                                step.classList.add("active");
                            } else {
                                step.classList.remove("active");
                            }
                        });
                    }
                    i = this.slides.length;
                } else {
                    this.slides[0].classList.add("active");
                    this.activeSlideIndicator.textContent = "01";
                    if (this.pagination) {
                        this.paginationProgressBar.style.width = this.oneStep + "%";
                        this.paginationSteps.forEach((step, stepIndex) => {
                            if (stepIndex === 0) {
                                step.classList.add("active");
                            } else {
                                step.classList.remove("active");
                            }
                        });
                    }
                    i = this.slides.length;
                }
            }
        }
    }

    prevSlide() {
        this.reloadAutoplay();
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains("active")) {
                this.slides[i].classList.remove("active");

                if ((i - 1) >= 0) {
                    this.slides[i - 1].classList.add("active");
                    if ((i - 1) < 10) {
                        this.activeSlideIndicator.textContent = "0" + i;
                    } else {
                        this.activeSlideIndicator.textContent = "" + i;
                    }
                    if (this.pagination) {
                        this.paginationProgressBar.style.width = this.oneStep * i + "%";
                        this.paginationSteps.forEach((step, stepIndex) => {
                            if ((i - 1) >= stepIndex) {
                                step.classList.add("active");
                            } else {
                                step.classList.remove("active");
                            }
                        });
                    }
                    i = this.slides.length;
                } else {
                    this.slides[this.slides.length - 1].classList.add("active");
                    if (this.slides.length < 10) {
                        this.activeSlideIndicator.textContent = "0" + this.slides.length;
                    } else {
                        this.activeSlideIndicator.textContent = this.slides.length;
                    }
                    if (this.pagination) {
                        this.paginationProgressBar.style.width = this.oneStep * this.slides.length + "%";
                        this.paginationSteps.forEach((step, stepIndex) => {
                            if (stepIndex <= this.slides.length) {
                                step.classList.add("active");
                            } else {
                                step.classList.remove("active");
                            }
                        });
                    }
                    i = this.slides.length;
                }
            }
        }
    }

    startAutoplay() {
        this.intervalFunction = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }

    stopAutoplay() {
        clearInterval(this.intervalFunction);
    }

    reloadAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }

    initPagination() {
        // create slider progress bar
        const
            progressBar = document.createElement("div"),
            progressBarSlider = document.createElement("span");
        progressBar.classList.add("stages__slider");

        this.oneStep = 100 / this.slides.length;
        progressBarSlider.style.width = this.oneStep + "%";
        this.paginationProgressBar = progressBarSlider;

        progressBar.appendChild(progressBarSlider);
        this.pagination.appendChild(progressBar);

        // create points slider
        if (this.slides[0].dataset.slideName) {
            const sliderSteps = document.createElement("ul");
            sliderSteps.classList.add("stages__steps");

            this.slides.forEach((slide, index) => {
                const sliderStep = document.createElement("li");
                sliderStep.classList.add("stages__step");
                sliderStep.style.width = 100 / this.slides.length + "%";
                if (index === 0) {
                    sliderStep.classList.add("active");
                }

                sliderStep.textContent = slide.dataset.slideName;

                sliderSteps.appendChild(sliderStep);
            });

            this.paginationSteps = sliderSteps.querySelectorAll(".stages__step");
            this.pagination.appendChild(sliderSteps);
        }
    }

    initSlideIndicator() {
        const
            slideIndicator = document.createElement("div"),
            activeSlideIndicator = document.createElement("span"),
            allSlidesIndicator = document.createElement("span");

        slideIndicator.classList.add("stages__number-slides");
        activeSlideIndicator.textContent = "01";

        if (this.slides.length < 10) {
            allSlidesIndicator.textContent = "/0" + this.slides.length;
        } else {
            allSlidesIndicator.textContent = "/" + this.slides.length;
        }

        this.activeSlideIndicator = activeSlideIndicator;

        slideIndicator.appendChild(activeSlideIndicator);
        slideIndicator.appendChild(allSlidesIndicator);

        if (this.toggleButtonsWrapper) {
            this.controlsElement.insertBefore(slideIndicator, this.toggleButtonsWrapper);
        } else {
            this.controlsElement.appendChild(slideIndicator);
        }
    }

    initToggleButtons() {
        this.toggleButtonsWrapper = this.controlsElement.querySelector(".controls-buttons");

        if (this.toggleButtonsWrapper.querySelector(".prev")) {
            this.prevButton = this.toggleButtonsWrapper.querySelector(".prev");
            this.prevButton.addEventListener("click", this.prevSlide.bind(this));
        } else {
            this.prevButton = null;
        }

        if (this.toggleButtonsWrapper.querySelector(".next")) {
            this.nextButton = this.toggleButtonsWrapper.querySelector(".next");
            this.nextButton.addEventListener("click", this.nextSlide.bind(this));
        } else {
            this.nextButton = null;
        }
    }
}