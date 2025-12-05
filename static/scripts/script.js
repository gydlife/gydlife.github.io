document.addEventListener("DOMContentLoaded", () => {

    const scrollButton = document.querySelector(".js-scroll-more");
    const whySection = document.querySelector("#why");

    if (scrollButton && whySection) {
        scrollButton.addEventListener("click", () => {
            whySection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }


    const toggle = document.querySelector(".header__toggle");
    const menu = document.querySelector(".header__menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("header__menu--open");
        });
    }
});