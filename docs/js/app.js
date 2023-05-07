"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelectorAll(".count");
    gsap.from(e, { textContent: 0, duration: 0, ease: Power1.easeIn, snap: { textContent: 1 }, stagger: 1 }),
        gsap.from(".extimation-line", { duration: 0, width: 0, stagger: 1, ease: Power4.easeIn }, 0.5),
        gsap.fromTo(".about-me", 2, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, 0.5),
        gsap.fromTo(".header__preview", 2, { x: -200, opacity: 0 }, { x: 0, opacity: 1 }, 0.5),
        gsap.fromTo(".header__preview-circle", 2, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }, 0.5),
        gsap.fromTo(".sidebar", 2, { css: { scale: 1 }, opacity: 0 }, { css: { scale: 1 }, opacity: 1 }, 0.5),
        gsap.fromTo(".sidebar", 2, { css: { scale: 0 }, opacity: 0 }, { css: { scale: 1 }, opacity: 1 }, 0.5),
        gsap.fromTo(".main-content", 2, { css: { scale: 0 }, opacity: 0 }, { css: { scale: 1 }, opacity: 1 }, 0.5);
});
