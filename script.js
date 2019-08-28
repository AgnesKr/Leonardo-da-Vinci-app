const slides = document.querySelectorAll(".slide")
const control = []

let key = 0
for (let i = slides.length - 1; i >= 0; i--) {
    slides[i].style.zIndex = key
    control.push({
        id: key,
        isOnTop: false
    })
    key++
}
control[0].isOnTop = true
for (let i = 1; i < slides.length; i++) {
    slides[i].style.opacity = 0
}

console.log(slides, control)

document.querySelector(".arrow-left").addEventListener("click", () => {
    let currentSlide
    let nextSlide
    for (let i = 0; i < control.length; i++) {
        if (control[i].isOnTop) {
            currentSlide = slides[control[i].id]
            if (control[i].id === 0) {
                nextSlide = slides[control[control.length - 1].id]
                control[control.length - 1].isOnTop = true
            } else {
                nextSlide = slides[control[i - 1].id]
                control[i - 1].isOnTop = true
            }
            control[i].isOnTop = false
            break;
        }
    }
    console.log(currentSlide, nextSlide)
    currentSlide.style.opacity = 0
    nextSlide.style.opacity = 1
    console.log(slides, control)
})

document.querySelector(".arrow-right").addEventListener("click", () => {
    let currentSlide
    let nextSlide
    for (let i = 0; i < control.length; i++) {
        if (control[i].isOnTop) {
            currentSlide = slides[control[i].id]
            if (control[i].id === control.length - 1) {
                nextSlide = slides[control[0].id]
                control[0].isOnTop = true
            } else {
                nextSlide = slides[control[i + 1].id]
                control[i + 1].isOnTop = true
            }
            control[i].isOnTop = false
            break;
        }
    }
    console.log(currentSlide, nextSlide)
    currentSlide.style.opacity = 0
    nextSlide.style.opacity = 1
    console.log(slides, control)
})