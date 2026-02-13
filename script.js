let musicStarted = false;
let music = document.getElementById("bgMusic");

function startMusic() {
    if (!musicStarted) {
        music.volume = 0.2; // start low
        music.play();
        musicStarted = true;
    }
}

function toggleMute() {
    music.muted = !music.muted;

    let icon = document.querySelector(".mute-control");
    icon.textContent = music.muted ? "🔇" : "🔊";
}

/* YES button → new page */
function goToLovePage() {
    window.location.href = "love.html";
}

/* NO button movement (safe from taskbar) */
function moveButton() {
    let button = document.querySelector(".no-btn");

    let safeBottomMargin = 120; // prevent hiding under taskbar
    let safeSideMargin = 20;

    let maxX = window.innerWidth - button.offsetWidth - safeSideMargin;
    let maxY = window.innerHeight - button.offsetHeight - safeBottomMargin;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

/* Slideshow (only photo2.jpg) */
let images = ["photo2.jpg"];
let index = 0;

setInterval(function () {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById("slide").src = images[index];
}, 3000);
