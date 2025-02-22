
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const navLinks = document.querySelector(".nav-links");
        const closeBtn = document.querySelector(".close-btn"); // Get close button

        menuToggle.addEventListener("change", function () {
            if (menuToggle.checked) {
                navLinks.classList.add("active");
            } else {
                navLinks.classList.remove("active");
            }
        });

        // Close menu when clicking the "X" button
        closeBtn.addEventListener("click", function () {
            menuToggle.checked = false;
            navLinks.classList.remove("active");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.checked = false;
                navLinks.classList.remove("active");
            }
        });
    });

