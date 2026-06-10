const video = document.querySelector("video");
const loopcode = "loop";
const debug = false;
let counter = 0;
if (debug) {
    setInterval(() => {
        console.log(counter);
    }, 100);
}
document.addEventListener("keydown", (e) => {
    if (e.key === "l" && counter === 0) {
        counter++;
    } else if (e.key === "o" && counter === 1) {
        counter++;
    } else if (e.key === "o" && counter === 2) {
        counter++;
    } else if (e.key === "p" && counter === 3) {
        video.loop = true;
        msg();
        counter++;
    } else {
        counter = 0;
    }
});
function msg() {
    let loopmsg = document.getElementById("loop");
    loopmsg.style.display = "block";
    setTimeout(() => {
        loopmsg.style.opacity = 0;
    }, 300);
}