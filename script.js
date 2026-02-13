let musicStarted = false;
let music = document.getElementById("bgMusic");

function startMusic() {
    if (!musicStarted) {
        music.play();
        music.volume = 0.5;
        musicStarted = true;
    }
}

function changeVolume(value) {
    music.volume = value;
}

function showLovePage() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

/* NO button limited movement */
function moveButton() {
    let button = document.querySelector(".no-btn");

    let maxX = window.innerWidth - button.offsetWidth - 20;
    let maxY = window.innerHeight - button.offsetHeight - 100; 
    // 100px safety margin so it never goes under Windows taskbar

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

/* Slideshow */
let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;

setInterval(function () {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById("slide").src = images[index];
}, 3000);
