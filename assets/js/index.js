const BURGER = document.getElementById("burger");
const CLOSEMENU = document.getElementById("closeMenu");
const MENU = document.querySelector(".menu");

//Events
BURGER.addEventListener("click", toggleMenu);
CLOSEMENU.addEventListener("click", toggleMenu);

function toggleMenu() {
    MENU.classList.toggle("openMenu");
}