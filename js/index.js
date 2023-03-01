const headerEl = document.querySelector(".hamburger");
const headerBanner = document.querySelector(".banner");
const headerWrapper = document.querySelector(".nav__wrapper");
const header = document.querySelector(".header")
headerEl.addEventListener("click", (e) => {
    headerEl.classList.toggle("is-active");
    headerBanner.classList.toggle("active");
    headerWrapper.classList.toggle("active");
    if (headerWrapper.classList.contains("active")) {
        header.classList.add("header__humburger");
    } else {
        header.classList.remove("header__humburger")
    }
} )