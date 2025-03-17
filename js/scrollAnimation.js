const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("animShow")
        } else {
            entry.target.classList.remove("animShow")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hiddenY, .hiddenX, .hiddenMark")
hiddenElements.forEach((el) => observer.observe(el))