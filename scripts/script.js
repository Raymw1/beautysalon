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
links.forEach(link => link.addEventListener("click", function (event) {
    event.preventDefault();
    menu.close();
    scrollSmooth(link);
}));


/* --------------------------    ADD SHADOW IN HEADER    -------------------------- */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;  // Get height of an element
function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add("scroll");
    }   else {
        header.classList.remove("scroll");
    }
}

/* --------------------------    DISPLAY BACK TO TOP BUTTON    -------------------------- */
const backToTopBtn = document.querySelector(".back-to-top");
function showBackToTopBtn () {
    if (window.scrollY >= 560) {
        backToTopBtn.classList.add("show");
    }   else {
        backToTopBtn.classList.remove("show");
    }
}


/* --------------------------    TESTIMONIALS SLIDER    -------------------------- */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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
    #contact .text, #contact .links,
    footer .logo, footer .brand, footer .social`, {interval: 100});


/* --------------------------    SCROLL LISTENER    -------------------------- */
window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    showBackToTopBtn();
    activateMenuAtCurrentSection();
})

/* --------------------------    SCROLL SMOOTH    -------------------------- */
function scrollSmooth(link) {
    const sectionId = link.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({behavior: "smooth"})
}


/* --------------------------    MENU ACTIVATION    -------------------------- */
const sections = document.querySelectorAll("section[id]");
function activateMenuAtCurrentSection () {
    const checkpoint = pageYOffset + (window.innerHeight / 8) * 4;
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
        if (checkpointStart && checkpointEnd) {
            document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add("active");
        } else {
            document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove("active");
        }
    }
}