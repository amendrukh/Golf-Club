document.querySelector(".hamburger")
    .addEventListener("click", (e) => {
        const banner = document.querySelector(".banner");
        const navWrapper = document.querySelector(".nav__wrapper");
        const headerWrapper = document.querySelector(".header__wrapper");
        const header = document.querySelector(".header");

        hamburger.classList.toggle("is-active");
        banner.classList.toggle("active");
        navWrapper.classList.toggle("active");
        headerWrapper.classList.toggle("header_1");
        header.classList.toggle("header__humburger");
    })