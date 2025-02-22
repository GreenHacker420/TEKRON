document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            navLinks.classList.add("active");
        } else {
            navLinks.classList.remove("active");
        }
    });

    document.addEventListener("click", function (e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.checked = false;
            navLinks.classList.remove("active");
        }
    });
});