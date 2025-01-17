const carouselContainer = document.querySelector(".carousel-container"),
    images = document.querySelectorAll(".carouselImg"),
    btn = document.querySelectorAll(".btn-slide");
let counter = 0;
images.forEach(((e, t) => {
    e.style.left = 100 * t + "%"
}));
const imageSlider = () => {
        images.forEach((e => {
            e.style.transform = `translateX(${100*counter}%)`
        }))
    },
    moveRight = () => {
        counter >= 0 ? (btn[0].style.pointerEvents = "none", btn[0].style.opacity = "0%", btn[0].style.transition = "all 0.3s ease-out") : (btn[1].style.pointerEvents = "auto", btn[1].style.opacity = "100%", counter++, imageSlider())
    },
    moveLeft = () => {
        counter <= -(images.length - 1) ? (btn[1].style.pointerEvents = "none", btn[1].style.opacity = "0%", btn[1].style.transition = "all 0.3s ease-out") : (btn[0].style.pointerEvents = "auto", btn[0].style.opacity = "100%", counter--, imageSlider())
    };
btn[0].addEventListener("click", (() => {
    moveRight()
})), btn[1].addEventListener("click", (() => {
    moveLeft()
}));
var startX, move, isDown = !1;

function mousedown(e) {
    isDown = !0, startX = e.pageX - carouselContainer.offsetLeft
}

function mousemove(e) {
    if (!1 === isDown) return;
    e.preventDefault();
    const t = e.pageX - carouselContainer.offsetLeft;
    move = t - startX
}

function mouseup(e) {
    isDown = !1, move > 0 ? moveRight() : move < 0 && moveLeft()
}
const popUp = document.querySelector(".pop-thanks"),
    popButton = document.querySelector(".pop-btn"),
    body = document.querySelector("body");
var state;

function formEmpty() {
    document.querySelector("#fname").value = "", document.querySelector("#content").value = "", document.querySelector("#num1").value = "", document.querySelector("#email").value = ""
}

function popup() {
    popUp.style.display = "flex", body.style.overflowY = "hidden"
}

function sendEmail() {
    popup()
}
popButton.addEventListener("click", (() => {
    popUp.style.display = "none", body.style.overflowY = "scroll", formEmpty()
}));
const whenLoaded = () => {
    document.querySelector(".loading").style.display = "none", document.querySelector("body").style.overflowY = "scroll"
};
let startingX, movingX;

function touchstart(e) {
    startingX = e.touches[0].clientX
}

function touchmove(e) {
    movingX = e.touches[0].clientX
}

function touchend() {
    startingX + 80 < movingX ? moveRight() : startingX - 80 > movingX && moveLeft()
}
window.addEventListener("load", whenLoaded), touchstart();
