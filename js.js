let password = document.getElementById("tbox");
let txt = document.getElementById("txt");
let pass = "";
let sound = document.getElementById("aud");
let on = document.getElementById("on");
let body = document.getElementById("body");
let dia = document.getElementById("dia");
let diawarn = document.getElementById("diawarn");
let sfx = document.getElementById("sfx");
let isTimer = false;

on.play();
setTimeout(function() {
    body.style.opacity = 1;
}, 1);
/*password.addEventListener("input", function(event) {
    this.value = this.value.toUpperCase();
});*/
/*password.addEventListener("input", ()=>{
    password.value = password.value.toUpperCase();
});*/

let focus = false;

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 123) {
        e.preventDefault();
        let wrongSfx = new Audio("wrong_password.mp3").play();
    }
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        let wrongSfx = new Audio("wrong_password.mp3").play();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
        let wrongSfx = new Audio("wrong_password.mp3").play();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
        let wrongSfx = new Audio("wrong_password.mp3").play();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
        let wrongSfx = new Audio("wrong_password.mp3").play();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        let wrongSfx = new Audio("wrong_password.mp3").play();
    }
    if (e.keyCode === 191 && !focus) {
        e.preventDefault();
        password.focus();
    }
});

password.addEventListener("focus", () => {
    focus = true;
});
password.addEventListener("blur", () => {
    focus = false;
});

password.addEventListener("input", (e) => {
    pass = password.value.toLowerCase();

    if (pass.length > 0 && "freedom".startsWith(pass) && e.inputType !== "deleteContentBackward") {
        let type = new Audio("sfx/type.mp3");
        type.currentTime = 0;
        type.play();
    }
});

password.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submit_new();
    }
});

function close_d() {
    dia.close();
}

async function submit_new() {
    try {
        const res = await fetch("https://raw.githubusercontent.com/GigaChannel2/Definitely-Not-A-Website/main/password_code.json")
        const data = res.json();

        const result = data[pass];

        switch (result.type) {
            case "href":
                goTo(result.value);
                break;
            case "txt":
                textCh(result.value);
                break;
            case "sfx":
                playSfx(result.value);
                break;
            default:
                break;
        }
    } catch (error) {
        try {
            submit();
        } catch (error) {
            console.log(error);
        }
    }
}

function submit() {
    let donate = document.getElementById("donation");
    let sfx_donate = document.getElementById("sfx_donate");
    if (pass == "donate"){
        //donate.style.display = "block";
        dia.showModal();
        sfx_donate.play();
    } else {
        //donate.style.display = "none";
        dia.close();
    }
    switch (pass){
        default:
            wrong();
            break;
        // case "lullaby":
        //     // code 131
        //     goTo("lullaby.html");
        //     break;
        // case "hall of memories":
        //     // code 130
        //     goTo("memories_hall.html");
        //     break;
        case "memories":
            // code 129
            goTo("memories.html");
            break;
        case "oyasumi":
            //code 128
            goTo("oyasumi.html");
            break;
        case "cyber world":
        case "a cyber world":
        case "a cyber world?":
            //code 127
            goTo("cyberworld.html");
            break;
        case "good morning":
            //code 126 
            goTo("goodmorning.html");
            break;
        case "searching for a world":
            //code 125
            textCh("NULL<br> Reason: That Doesn't Exist");
            break;
        case "trinity":
            // code 124
            goTo("trinity.html");
            break;
        case "fiend":
            //code 123
            goTo("fiend.html");
            break;
        case "freedom":
            // code 122
            textCh("Lies");
            break;
        case "adore":
            // code 121
            goTo("palace.html");
            break;
        case "see you tomorrow":
            // code 120
            goTo("see_you_tomorrow.html");
            break;
        case "soundboard":
            // code 119
            goTo("soundboard.html");
            break;
        case "by your side":
            // code 118
            goTo("by_your_side.html");
            break;
        case "with hope crossed on our hearts":
            // code 117
            goTo("with_hope_crossed_on_our_hearts.html");
            break;
        case "with hope crossed on her heart":
            // code 116
            goTo("with_hope_crossed_on_her_heart.html");
            break;
        case "us praktek manager":
            // code 115
            goTo("school/US_Praktek_9C/US_Praktek_Manager.html");
            break;
        case "us praktek 9c: bahasa indonesia":
            // code 114
            goTo("school/US_Praktek_9C/Bahasa Indonesia/Naskah_Drama_Malin_Kundang-Web_Ver.html");
            break;
        case "us praktek 9c: english":
            // code 113
            goTo("school/US_Praktek_9C/English/Recount_Text.html");
            break;
        case "tiba-tiba":
            // code 112
            goTo("tiktokvideoifoundthatscool.html");
            break;
        case "lost library":
            // code 111
            goTo("lost_library.html");
            break;
        case "vallis cineris":
            // code 110
            textCh("Valley of Ashes.");
            break;
        case "hitori gotou":
            // code 109
        case "hitori gotoh":
            // code 108
        case "hitorigoto":
            // code 107
            goTo("");
            break;
        case "i fucking hate myself":
            // code 106
        case "i hate myself":
            // code 105
            textCh("Don't say that...");
            break;
        case "i hate you":
            // code 104
            textCh("Correct!");
            break;
        case "ikuyo kita":
            // code 103
        case "kita":
            // code 102
        case "ikuyo":
            // code 101
            goTo("https://id.pinterest.com/search/pins/?q=ikuyo%20kita&rs=typed");
            break;
        case "everything is going to be okay":
            // code 100
            goTo("everythingisgoingtobeokay.html");
            break;
        case "long poem":
            // code 99
            goTo("longpoem.html");
            break;
        case "therapy session":
            // code 98
        case "therapy":
            // code 97
        case "therapy?":
            // code 96
            goTo("therapy.html");
            break;
        case "6524":
            // code 95
            goTo("event/6524/web/c2l4IGZpdmUgdHdvIGZvdXI=.xml");
            break;
        case "kuyashi":
            // code 94
            playSfx("sfx/kuyashi.mp3");
            break;
        case "yatta":
            // code 93
            playSfx("sfx/yatta.mp3");
            break;
        case "field of hopes and dreams":
            // code 92
            goTo("fohad.html");
            break;
        case "cgfzc3dvcmq=":
            // code 91
            goTo("event/cGFzc3dvcmQ=.html");
            break;
        case "3415":
            // code 90
            goTo("event/3145.html");
            break;
        case "event":
            // code 89
            goTo("event/QkxBU1BIRU1Z.json");
            break;
        case "trinity of shadows":
            // code 88
            goTo("trinity.html");
            break;
        case "dark place":
            // code 87
            goTo("darkplace.html");
            break;
        case "playing forever":
            // code 86
            goTo("playingforever.html");
            break;
        case "red space":
            // code 85
            goTo("redspace.html");
            break;
        case "pupue":
            // code 84
            goTo("pupue.html");
            break;
        case "butt certificate":
            // code 83
            textCh("So majestic... So beautiful...");
            break;
        case "starwalker":
            // code 82
            textCh("Very                          Original");
            break;
        case "original":
            // code 81
            textCh("            Starwalker");
            break;
        case "mahiro fan art":
            // code 80
        case "mahiro baddie pic":
            // code 79
        case "mahiro picture":
            // code 78
            goTo("https://id.pinterest.com/search/pins/?q=mahiro%20oyama%20fan%20art&rs=ac&len=11&source_id=ac_kIQPgMLu&eq=mahiro%20oyama&etslf=5242");
            break;
        case "mahiro":
            // code 77
        case "mahiro oyama":
            // code 76
            textCh("Best Femboy imo");
            break;
        case "mihari":
            // code 75
        case "mihari oyama":
            // code 74
            textCh("Best Scientist (made the best femboy)");
            break;
        case "mari?":
            // code 73
            showwarn();
            break;
        case "findher":
            // code 72
            goTo("d.html");
            break;
        case "white door":
            // code 71
            goTo("whitedoor.html");
            break;
        case "white space":
            // code 70
            goTo("whitespace.html");
            break;
        case "black space":
            // code 69
            goTo("blackspace.html");
            break;
        case "bocchi the rock":
            // code 68
        case "bocchi":
            // code 67
            goTo("https://id.pinterest.com/search/pins/?q=bocchi%20happy&rs=rs&source_id=rs_xYXVHrhD&top_pin_ids=327214729197769176&eq=&etslf=12075");
            break;
        case "34":
            // code 66
            goTo("https://gelbooru.com");
            break;
        case "bad poem":
            // code 65
            textCh("followed the Lost would forest children where\ntail. pointed grow, the the. The poor children!");
            break;
        case "poem":
            // code 64
            textCh("Lost where the forest would grow,\nthe children followed the pointed tail. The poor children!");
            break;
        case "pedo":
            // code 63
        case "pedophile":
            // code 62
        case "child naked picture":
            // code 61
            goTo("https://www.google.com/search?sca_esv=f4adb27807e92ea2&sxsrf=ANbL-n5vZ71ZGcHsr51u2kGEvg-1y1kw3w:1775213803220&q=nearest+therapy+sessiom&source=lnms&fbs=ADc_l-b9VKtw-PEOgpNtBvxtbTosleNvVAXweKdFkN1Lw1_WR-Tnhg_B3LC7uKNO3Vlrl6vjIhPVL-T2z0qicik9jtMCbRBKlo_-g0G209-i_ulTgCJ7142Yv48xOvOUlv_Ee7SGBksbWDfWj6Py3gjeY1lCcBOBLp_MbOmDEoCtHeaohSLTrcRexCjor9rk2yJ2KPIyp5L0cIUh1vtzcfDy7vsYJ8f3zO80g0DEms3JdhDP_KowyWI&sa=X&ved=2ahUKEwjevZDhwtGTAxVQSmwGHT6EIoUQ0pQJegQIDBAB&biw=1432&bih=776&dpr=1");
            break;
        case "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa":
            // code 60
            textCh("AAAAAAAAAAAAAAAAA");
            break;
        case "hang tuah 3":
            // code 59
            textCh("fuck you");
            break;
        case "ado":
            // code 58
            goTo("https://www.google.com/search?sca_esv=f4adb27807e92ea2&sxsrf=ANbL-n4Pl7sqSEU62x78uxO_ZWkzdPy3ow:1775212960963&udm=2&fbs=ADc_l-ZfIPzv45NHkpmEx1uvAy1Y0jSl1hx3Xkmo2lpunDqItvmOdSOit7muIXZsXvpLBdHparcpJwBJPZvwUJitlUSAAObBERCLj5B1G_Ze_uTNZ95aI3CpUVrxpXF6D6vd12ppXIvKgVZFZyetuYmVWNYibTZHtKzdOF-wAWnuk0UgfuzcwdebN7r15sUTyRvJO_KY59v2uwAW5m9pUmPfDpo6NaYdig&q=shrimp+town&sa=X&ved=2ahUKEwjD8MDPv9GTAxU8xDgGHbJSNQEQtKgLegQIERAB&biw=1432&bih=776&dpr=1");
            break;
        case "yellow gates":
            // code 57
            goTo("https://youtu.be/1-F1oCFPiIM?si=BVENZoNRDc1bwWFr");
            break;
        case "yellow gate":
            // code 56
            goTo("https://drive.google.com/drive/folders/1Zv7eBKziKf5Rb_IhlFNFxMizdhn3lYwk");
            break;
        case "mayonnaise":
            // code 55
        case "mayo":
            // code 54
            goTo("https://www.youtube.com/@averylargemayo");
            break;
        case "omori":
            // code 53
            textCh("Don't forget to forgive yourself.");
            break;
        case "gone":
            // code 52
            goTo("gone.html");
            break;
        case "duet":
            // code 51
            goTo("duet.html");
            break;
        case "undertale":
            // code 50
            textCh("How was the fall?");
            break;
        case "lancer":
            // code 49
            goTo("https://deltarune.com/lancer");
            break;
        case "deltarune":
            // code 48
            goTo("https://www.youtube.com/watch?v=VrPpnRRpux8");
            break;
        case "richie":
            // code 47
            goTo("https://raw.githubusercontent.com/GigaChannel2/Definitely-Not-A-Website/refs/heads/main/Richie.jpg");
            break;
        case "lionel":
            // code 46
            textCh("monyet");
            break;
        case "0704":
            // code 45
            goTo("jason/jason.html");
            break;
        case "donate":
            // code 44
            break;
        case "the prism":
            // code 43
            goTo("theprism.html");
            break;
        case "green prism":
            // code 42
            goTo("prisms/greenprism.html");
            break;
        case "purple prism":
            // code 41
            goTo("prisms/purpleprism.html");
            break;
        case "pink prism":
            // code 40
            goTo("prisms/pinkprism.html");
            break;
        case "orange prism":
            // code 39
            goTo("prisms/orangeprism.html");
            break;
        case "yellow prism":
            // code 38
            goTo("prisms/yellowprism.html");
            break;
        case "blue prism":
            // code 37
            goTo("prisms/blueprism.html");
            break;
        case "red prism":
            // code 36
            goTo("prisms/redprism.html");
            break;
        case "deva":
            // code 35
            textCh("papua boi");
            break;
        case "experiment 14":
            // code 34
            goTo("exp14.html");
            break;
        case "experiment 8":
            // code 33
            goTo("exp8.html");
            break;
        case "dina":
            // code 32
        case "farid":
            // code 31
            textCh("farid + dina = chinese boi");
            break;
        case "uoldvb":
            // code 30
            textCh("HAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\nHAHAHAHAHAHAHAHAHAHAHAHAHAHA\n");
            break;
        case "mobile legend":
            // code 29
            textCh("apa bagusnya coba, bosenin");
            break;
        case "experiment 17":
            // code 28
            textCh("Dark.\nDarker.\nYet Darker.");
            break;
        case "4 brothers":
            // code 27
            textCh("Great Childhood");
            break;
        case "sans smp":
            // code 26
            textCh("Memories.");
            break;
        case "girzmtov":
            // code 25
            goTo("https://youtu.be/4I6smtKoJE4?si=R3cbKvzSgepL2jjw");
            break;
        case "mystery":
            // code 24
            textCh("Girzmtov");
            break;
        case "hour of joy":
            // code 23
            goTo("https://youtu.be/TbWV7gCPiYc?si=6c5DmdMRQSCOQTeW");
            break;
        case "gravity falls":
            // code 22
            textCh("Great Show.");
            break;
        case "yogi":
            // code 21
            textCh("boti");
            break;
        case "sekolah":
            // code 20
        case "school":
            // code 19
            textCh("Prison - Kids Edition");
            break;
        case "nadya":
            // code 18
        case "nadia":
            // code 17
            goTo("https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://id.wikihow.com/Cepat-Kurus&ved=2ahUKEwiovv7A4O2LAxV3wTgGHYK6MZ8QFnoECC0QAQ&sqi=2&usg=AOvVaw0GJeJ5-8ny9ulUMstXglBb");
            break;
        case "azzam arsyad":
            // code 16
        case "azzam":
            // code 15
        case "arsyad":
            // code 14
            goTo("https://solo.to/gigachannel");
            break;
        case "zidan":
            // code 13
        case "zaidan":
            // code 12
            goTo("https://www.google.com/search?sca_esv=e18616a4d636eb23&sxsrf=ANbL-n4GHcWe9dDiH1UPRgsJvT0u3af-Qw:1775212259552&udm=2&fbs=ADc_l-aNj6uplnfLbRFO_hsDAWa36jV53wIX7ZveR57-j40Yw0fvSHkrwH3Q13rTGipQZviqORSiEM6KkbfW7BEmLRh_XGKQd3yqLbBx5CDmeqjPOJsVNWIORl2J-xRxnzhARJNvEB_IeNxZEkCgNagbHVMAm0H3Hysat59yvfHbAw1zK8-K93b6mwXghECLa31W4gkp8OeRGkzrUqH3ETVKct31_0YpnA&q=bocchi+maid+outfit&sa=X&ved=2ahUKEwj-_YWBvdGTAxVcUGwGHSdBKwUQtKgLegQIFBAB");
            break;
        case "pdil":
            // code 11
        case "fadil":
            // code 10
        case "fadhil":
            // code 9
            goTo("https://www.google.com/search?sca_esv=e18616a4d636eb23&udm=2&biw=1432&bih=776&sxsrf=ANbL-n57ZcOcCDeMy21dBJu0ZpMAZR5xaQ:1775212364296&q=seiun+sky&spell=1&sa=X&ved=2ahUKEwjdtf-yvdGTAxULSGwGHRNzJ6EQBSgAegQIChAB")
            break;
        case "kasane":
            // code 8
        case "kasane teto":
            // code 7
        case "teto":
            // code 6
            goTo("https://pin.it/w9r49zVFj");
            break;
        case "miku":
            // code 5
        case "hatsune miku":
            // code 4
        case "hatsune":
            // code 3
            goTo("https://youtube.com/shorts/2oa5WCUpwD8?si=b3w06K4bQYKGxtwG");
            break;
        case "magical miku":
            // code 2
            goTo("https://youtu.be/3iUgKH8c7p4?si=0CSLP3D9ve2NzHdK&t=96");
            break;
        case "magical teto":
            // code 1
            goTo("https://youtu.be/4e2XnoNEsdE?si=9h4i9rQDsN2VY22z&t=96");
            break;
    }
}

function playSfx(src) {
    sfx.src = src;
    sfx.play();
}

function showwarn() {
    diawarn.classList.add("show");
}

function warn_con() {
    goTo("mari.html")
}

function close_warn() {
    diawarn.classList.remove("show");
}

function wrong() {
    let wrongSfx = new Audio("wrong_password.mp3").play();
    if (!isTimer) {
        isTimer = true;
        password.classList.add("wrong");
        txt.style.color = "red";
        txt.style.opacity = 1;
        txt.innerHTML = "Wrong Password";
        txt.style.fontFamily = "Source Code Pro";
        txt.style.visibility = "visible";
        // sound.play();
        setTimeout(function() {
            txt.style.opacity = 0;
            password.classList.remove("wrong");
            setTimeout(function() {
                txt.style.visibility = "hidden";
                isTimer = false;
            }, 500);
            password.onfocus = function () {
                password.classList.remove("wrong");
            }
            password.onblur = function() {
                password.classList.remove("wrong");
            }
        }, 500);
    }
}

function textCh(value) {
    if(!isTimer) {
        isTimer = true;
        txt.style.color = "white";
        txt.style.opacity = 1;
        txt.innerHTML = value;
        txt.style.visibility = "visible";
        if (pass == "butt certificate") {
            txt.style.fontFamily = "omori";
        } else {
            txt.style.fontFamily = "Source Code Pro";
        }
        let timer = setTimeout(function() {
            txt.style.opacity = 0;
            setTimeout(function() {
                txt.style.visibility = "hidden";
                isTimer = false;
            }, 500);
        }, 3000);
    }
}

function goTo(value) {
    window.location.href = value;
}