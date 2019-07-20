const leftArrowElement = document.querySelector(".arrow-left"),
    rightArrowElement = document.querySelector(".arrow-right"),
    sectionElemnts = document.querySelectorAll("section"),
    coverElement = document.querySelector(".cover")

let page = 0

for (let i = 0; i < sectionElemnts.length; i++) {
    sectionElemnts[i].style.zIndex = sectionElemnts.length - i - 1
}

window.addEventListener("scroll", function () {
    let windowHeight = window.screen.availHeight
})

window.addEventListener("resize", function () {
    changeArrowsPosition()
})

changeArrowsPosition()

function changeArrowsPosition() {
    if (document.body.offsetWidth < 950) {
        leftArrowElement.style.visibility = "hidden"
        rightArrowElement.style.visibility = "hidden"
    } else {
        leftArrowElement.style.left = coverElement.getBoundingClientRect().left - 50 - leftArrowElement.getBoundingClientRect().width / 2
        rightArrowElement.style.left = coverElement.getBoundingClientRect().right + 50 - rightArrowElement.getBoundingClientRect().width / 2
        leftArrowElement.style.visibility = "visible"
        rightArrowElement.style.visibility = "visible"
    }
}

rightArrowElement.addEventListener("click", function () {
    if(page == sectionElemnts.length - 1) {
        page = 0
        let tab = []
        for(let i = 0; i < sectionElemnts.length; i++) {
            tab.push(i)
        } 
        tab.reverse()
        for(let i = sectionElemnts.length - 1 ; i >= 0 ; i--) {
            sectionElemnts[i].style.zIndex = tab[i]
        }
    }else {
        page++
        let number = page - 1,
        tab = []
        for(let i = page - 1; i >= 0; i--) {
            tab.push(number)
            number--
        }
        for(let i = page - 1; i >= 0; i--) {
            sectionElemnts[i].style.zIndex = tab[i]
            number--
        }
        sectionElemnts[page].style.zIndex =  "4"
        let tab2 = []
        for(let i = sectionElemnts.length - 1; i >= page; i--) {
            tab2.push(i)
        }
        for(let i = page + 1; i < sectionElemnts.length; i++){
            sectionElemnts[i].style.zIndex = tab2[i - page]
        }
    }
})

leftArrowElement.addEventListener("click", function () {
    if (page - 1 < 0) {
        
    } else {
        page--
        let number = page - 1,
        tab = []
        for(let i = page - 1; i >= 0; i--) {
            tab.push(number)
            number--
        }
        for(let i = page - 1; i >= 0; i--) {
            sectionElemnts[i].style.zIndex = tab[i]
            number--
        }
        sectionElemnts[page].style.zIndex =  "4"
        let tab2 = []
        for(let i = sectionElemnts.length - 1; i >= page; i--) {
            tab2.push(i)
        }
        for(let i = page + 1; i < sectionElemnts.length; i++){
            sectionElemnts[i].style.zIndex = tab2[i - page]
        }
    }
})