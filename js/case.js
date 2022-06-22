const
    allPresentationButtons = document.querySelectorAll(".screen-presentation__btn"),
    allPresentationItems = document.querySelectorAll(".screen-presentation__screen"),
    presentationImgRotate = document.querySelector(".screen-presentation__bg-img");

allPresentationButtons.forEach((button, buttonIndex) => {
    button.addEventListener("click", function () {
        presentationImgRotate.style.transform = "translate(-50%, -50%) rotate(" + (45 * buttonIndex) + "deg)";
        allPresentationButtons.forEach((btn, index) => {
            if (index === buttonIndex) {
                btn.classList.add("active");
                allPresentationItems[index].classList.add("active");
            } else {
                btn.classList.remove("active");
                allPresentationItems[index].classList.remove("active");
            }
        });
    });
});

const
    allTechnologyButtons = document.querySelectorAll(".case-info__technology-link"),
    allTechnologyItems = document.querySelectorAll(".case-info__tools-item");

allTechnologyButtons.forEach((btn, btnIndex) => {
    btn.addEventListener("click", function () {
        if (!this.classList.contains("active")) {
            allTechnologyButtons.forEach(item => {
                item.classList.remove("active");
            });
            allTechnologyItems.forEach(item => {
                item.classList.remove("active");
            });

            btn.classList.add("active");
            allTechnologyItems[btnIndex].classList.add("active");
        }
    });
});