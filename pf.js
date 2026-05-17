let txt = document.getElementById("txt");
let speed = 14300;
let changed = 0;
let startChange = false;
let spedUp = false;
document.getElementById("container").style.opacity = 1;
txt.textContent = "I loved you";

setInterval(() => {
    switch (changed) {
        case 1:
            speed = 14300;
            break;
        case 2:
            speed = 1430;
            break;
        case 3:
            speed = 143;
            spedUp = true;
            break;
    }
}, 14);

document.querySelector("audio").addEventListener("ended", () => {
    text();
});

function text() {
    setTimeout(() => {
        txt.textContent = "She loved you and you killed her";
        setTimeout(() => {
            txt.textContent = "He loved her and you killed her";
            setTimeout(() => {
                txt.textContent = "They loved her and you killed her";
                if (changed < 143 && speed > 0){                    
                    changed += 1;
                    if (spedUp) {
                        speed -= 1;
                        console.log(speed);
                    }
                    text();
                } else {
                    txt.textContent = "You loved her and you killed her.";
                    txt.style.color = "#800000";
                }
            }, speed)
        }, speed)
    }, speed)
}
// setTimeout(() => {
//     txt.textContent = "She loved you and you killed her";
//     text()
// }, 143000)