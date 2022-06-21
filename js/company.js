const $professionSelect = $('#join_user-profession');
$professionSelect.select2({
    placeholder: 'Select your profession',
    minimumResultsForSearch: -1
});
$professionSelect.val("");
$professionSelect.trigger('change');

document.querySelector("#join-team").addEventListener("click", function () {
    document.querySelector(".join-modal").classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
})


let reverse = 0;
function loopHeading (itemClass) {
    let
        allItems = document.querySelectorAll(itemClass);

    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].classList.contains("active")) {
            if ((i+1) === allItems.length) {
                reverse = allItems.length - 1;
            }

            if (reverse > 0) {
                allItems[i].classList.add("middle");
                allItems[i].classList.remove("active");
                allItems[i - 1].classList.add("active");
                if ((i - 2) > 0) {
                    allItems[i - 2].classList.add("middle");
                }
                reverse--;
            } else {
                allItems[i].classList.add("middle");
                allItems[i].classList.remove("active");
                allItems[i + 1].classList.add("active");
                if (i + 2 < allItems.length) {
                    allItems[i + 2].classList.add("middle");
                }
                i = allItems.length;
            }
        } else {
            allItems[i].classList.remove("middle");
            allItems[i].classList.remove("active");
        }
    }
}

setInterval(() => {
    loopHeading(".company-intro__title");
}, 3000)

const
    allBlocksTeam = document.querySelectorAll(".our-team__block"),
    allBlocksTeamHeight = [],
    allButtonsOpenTeamBlock = document.querySelectorAll(".our-team__btn-more");

allBlocksTeam.forEach((item, index) => {
    if (index !== 0) {
        allBlocksTeamHeight.push(item.clientHeight);
        item.style.height = "0";
    }
});

allButtonsOpenTeamBlock.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        allBlocksTeam[index + 1].style.height = allBlocksTeamHeight[index] + "px";
        this.style.display = "none";
    });
});