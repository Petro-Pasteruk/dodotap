let mySlider = new StagesSlider(".stageSlider", {
    "interval": 8000,
    "autoplay": true,
    "pagination": ".stages__pagination",
    "controlsElement": ".stages__controls"
})

const
    allSkillVectorButtons = document.querySelectorAll(".skill-vector__button"),
    allSkillVectorItems = document.querySelectorAll(".skill-vector__item"),
    skillVector = document.querySelector(".skill-vector__vector");

allSkillVectorButtons.forEach((btn, index) =>  {
    btn.addEventListener("click", function () {
        allSkillVectorButtons.forEach(button => { button.classList.remove("active"); });
        allSkillVectorItems.forEach(item => { item.classList.remove("active"); });

        btn.classList.add("active");
        allSkillVectorItems[index].classList.add("active");

        skillVector.style.transform = "translate(-50%, -50%) rotate(" + (45 * index + 1) + "deg)";
    });
});


const
    allTechnologyButtons = document.querySelectorAll(".technology__btn"),
    allTechnologyItems = document.querySelectorAll(".technology__item");

allTechnologyButtons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        allTechnologyButtons.forEach(button => { button.classList.remove("active"); });
        allTechnologyItems.forEach(button => { button.classList.remove("active"); });

        btn.classList.add("active");
        allTechnologyItems[index].classList.add("active");
    });
});