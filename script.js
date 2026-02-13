let musicStarted = false;
let music = document.getElementById("bgMusic");

// Start music automatically when page loads
window.addEventListener("load", () => {
    if (!musicStarted) {
        music.volume = 0.02; // 2% volume
        music.play();
        musicStarted = true;
    }
});

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
    button.style.top = randomY
