const leftArrowElement = document.querySelector(".arrow-left"),
    rightArrowElement = document.querySelector(".arrow-right"),
    sectionElemnts = document.querySelectorAll("section"),
    coverElement = document.querySelector(".cover")

let page = 0

for (let i = 0; i < sectionElemnts.length; i++) {
    sectionElemnts[i].style.zIndex = sectionElemnts.length - i
}

window.addEventListener("scroll", function () {
    let windowHeight = window.screen.availHeight
})

window.addEventListener("resize", function () {
    changeArrowsPosition()
})

changeArrowsPosition()

function changeArrowsPosition() {
    if(document.body.offsetWidth < 950) {
        leftArrowElement.style.visibility = "hidden"
        rightArrowElement.style.visibility = "hidden"
    } else {
        leftArrowElement.style.left = coverElement.getBoundingClientRect().left - 50 - leftArrowElement.getBoundingClientRect().width / 2
        rightArrowElement.style.left = coverElement.getBoundingClientRect().right + 50 - rightArrowElement.getBoundingClientRect().width / 2
        leftArrowElement.style.visibility = "visible"
        rightArrowElement.style.visibility = "visible"
    }
}

rightArrowElement.addEventListener("click", function() {
    sectionElemnts[page].style.opacity = "0"
    setTimeout(() => {
        for(let i = 0; i < sectionElemnts.length; i++) {
            sectionElemnts[i].style.zIndex = Number(sectionElemnts[i].style.zIndex) + 1
            console.log(sectionElemnts[i])
        }
        sectionElemnts[page].style.zIndex = 1
        sectionElemnts[page].style.opacity = "1"
        page++
        if(page === sectionElemnts.length  ) {
            page = 0
        }
    }, 400)
})
