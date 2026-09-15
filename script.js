const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, {
    threshold: 0.2
});

serviceCards.forEach((card) => {
    serviceObserver.observe(card);
});
const workImage = document.querySelector(".work-container img");

const workObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, {
    threshold: 0.2
});

workObserver.observe(workImage);
const howCards = document.querySelectorAll(".how-card");

const howObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, {
    threshold: 0.2
});

howCards.forEach((card) => {
    howObserver.observe(card);
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
document.addEventListener("click", (event) => {
    if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navMenu.classList.remove("active");
    }
});
