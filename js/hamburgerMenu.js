const menu = document.getElementById("navOverlay");
const toggleMenu = document.querySelector(".toggleMenu")


toggleMenu.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex"
})