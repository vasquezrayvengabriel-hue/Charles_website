/*=====================================
    MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/*=====================================
    STICKY HEADER
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

/*=====================================
    ACTIVE NAVIGATION
=====================================*/

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

/*=====================================
    COUNTER ANIMATION
=====================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

/*=====================================
    FADE-IN ON SCROLL
=====================================*/

const revealElements = document.querySelectorAll(
    ".card, .program-card, .news-card, .why-card, .about-preview, .stat-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=====================================
    SMOOTH BUTTON HOVER
=====================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

/*=====================================
    CURRENT YEAR
=====================================*/

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("DLSJBC Website Loaded Successfully");
