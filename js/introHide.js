const parallaxHeader = document.querySelector("#parallaxHeader")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 555){
        parallaxHeader.classList.add("opacity-0")
    } else {
        parallaxHeader.classList.remove("opacity-0")
    }
})