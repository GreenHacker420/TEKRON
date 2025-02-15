function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

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