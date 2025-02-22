document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("change", function () {
        if (this.checked) {
            navLinks.classList.add("active");
        } else {
            navLinks.classList.remove("active");
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.checked = false; // Uncheck checkbox to close menu
            navLinks.classList.remove("active");
        });
    });
});


function updateCountdown() {
    const eventDate = new Date("March 5, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
    } else {
        document.getElementById("countdown").innerHTML = "Event Started!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// if (window.innerWidth < 768) {
//     var elems = document.getElementsByClassName("text-content");
//     Array.from(elems).forEach(function (elem) {
//         elem.remove();
//     });
// }