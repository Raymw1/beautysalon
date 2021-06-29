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

