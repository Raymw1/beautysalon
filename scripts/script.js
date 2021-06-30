/* --------------------------    TOGGLE NAV BAR    -------------------------- */
const menuContainer = document.querySelector("#header nav");
const links = document.querySelectorAll("#header nav .menu ul li a.title");
const menu = {
    open() {
        menuContainer.classList.add("show");
    },
    close() {
        menuContainer.classList.remove("show");
    }
}
document.querySelector("#header nav .icon-menu").addEventListener("click", menu.open)
document.querySelector("#header nav .icon-close").addEventListener("click", menu.close)
links.forEach(link => link.addEventListener("click", menu.close));


/* --------------------------    ADD SHADOW IN HEADER    -------------------------- */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;  // Get height of an element
window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add("scroll")
    }   else {
        header.classList.remove("scroll");
    }
})


/* --------------------------    TESTIMONIALS SLIDER    -------------------------- */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

  });


/* --------------------------    SCROLL REVEAL    -------------------------- */
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true
});
scrollReveal.reveal(`#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`, {interval: 100})

