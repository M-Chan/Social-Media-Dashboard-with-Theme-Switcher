
const banner = document.getElementById("banner");
const toggleButton = document.getElementById("toggle");
const toggleDot = document.getElementById("toggleDot");
const attribution = document.getElementById("attribution");

let card = document.querySelectorAll(".card");
let font1 = document.querySelectorAll(".font1");
let font2 = document.querySelectorAll(".font2");
let font5 = document.querySelectorAll(".font5");


toggleDot.classList.remove("toggleDotInitial");

// the function below 'toggles darkmode' by switching the colours between a light theme and a dark theme
function toggleDarkMode() {
    if(banner.classList.contains("bannerLight")) { // if in lightmode then switch to dark mode
        document.body.style.background = "hsl(230, 17%, 14%)";
    }

    else if (banner.classList.contains("bannerDark")) { // if in darkmode then switch to light mode
        document.body.style.background = "hsl(0, 0%, 100%)";
    }

    else { // modetype not found
        console.log("Error");
    }

    banner.classList.toggle("bannerLight");
    banner.classList.toggle("bannerDark");

    toggleButton.classList.toggle("toggleLight");
    toggleButton.classList.toggle("toggleDark");

    toggleDot.classList.toggle("toggleDotLight");
    toggleDot.classList.toggle("toggleDotDark");

    attribution.classList.toggle("attributionLight");
    attribution.classList.toggle("attributionDark");


    card.forEach(item => { // change the colour of the cards
        item.classList.toggle("cardLight");
        item.classList.toggle("cardDark");
    })

    font1.forEach(item => {
        item.classList.toggle("fontLight1");
        item.classList.toggle("fontDark1");
    })

    font2.forEach(item => {
        item.classList.toggle("fontLight2");
        item.classList.toggle("fontDark2");
    })

    font5.forEach(item => {
        item.classList.toggle("fontLight5");
        item.classList.toggle("fontDark5");
    })
}