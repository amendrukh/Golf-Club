const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    const banner = document.querySelector(".banner");
    const navWrapper = document.querySelector(".nav__wrapper");
    const headerWrapper = document.querySelector(".wrapper__header");
    const header = document.querySelector(".header");

    hamburger.classList.toggle("is-active");
    banner.classList.toggle("active");
    navWrapper.classList.toggle("active");
    headerWrapper.classList.toggle("header_reverse");
    header.classList.toggle("header__humburger");
})