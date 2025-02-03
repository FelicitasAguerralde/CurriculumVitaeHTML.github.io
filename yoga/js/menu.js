"use strict"
//menu responsive
document.querySelector(".btn_menu").addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".barra_nav").classList.toggle("show");
}
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    console.log(`Scroll vertical: ${scrollY}px, Scroll horizontal: ${scrollX}px`);
    if (window.scrollY > 200) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});