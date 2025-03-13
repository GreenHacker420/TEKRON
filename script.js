document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#menu-icon");
    const navLinks = document.querySelector("#nav-links");
    const closeBtn = document.querySelector("#close-btn");

    // Open menu
    menuIcon.addEventListener("click", function () {
        navLinks.classList.add("active");
    });

    // Close menu
    closeBtn.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

if (window.innerWidth < 768) {
    var elems = document.getElementsByClassName("container");
    Array.from(elems).forEach(function (elem) {
        elem.remove();
    });
}



function updateCountdown() {
    const eventDate = new Date("March 5, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
        document.getElementById("countdown").innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
    } else {
        document.getElementById("countdown").innerHTML = "Event Ended!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

