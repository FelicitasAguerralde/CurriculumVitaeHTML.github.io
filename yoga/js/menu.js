"use strict"
//menu responsive
document.querySelector(".btn_menu").addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".barra_nav").classList.toggle("show");
}
