
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

        console.log("In Light Mode");
        console.log("In Light Mode switching to Dark Mode");
        banner.classList.remove("bannerLight");
        toggleButton.classList.remove("toggleLight");
        toggleDot.classList.remove("toggleDotLight");
        attribution.classList.remove("attributionLight");
        banner.classList.add("bannerDark");
        toggleButton.classList.add("toggleDark");
        toggleDot.classList.add("toggleDotDark");
        attribution.classList.add("attributionDark");

        card.forEach(item => { // change the colour of the cards from grey to dark desaturated blue
            item.classList.remove("cardLight");
            item.classList.add("cardDark");
        })

        font1.forEach(item => { // change the very dark blue font to white
            item.classList.remove("fontLight1");
            item.classList.add("fontDark1");
        })

        font2.forEach(item => {
            item.classList.remove("fontLight2");
            item.classList.add("fontDark2");
        })

        font5.forEach(item => {
            item.classList.remove("fontLight5");
            item.classList.add("fontDark5");
        })
    }

    else if (banner.classList.contains("bannerDark")) { // if in darkmode then switch to light mode
        document.body.style.background = "hsl(0, 0%, 100%)";

        console.log("In Dark Mode");
        console.log("In Dark Mode switching to Light Mode");
        banner.classList.remove("bannerDark");
        toggleButton.classList.remove("toggleDark");
        toggleDot.classList.remove("toggleDotDark");
        attribution.classList.remove("attributionDark");
        banner.classList.add("bannerLight");
        toggleButton.classList.add("toggleLight");
        toggleDot.classList.add("toggleDotLight");
        attribution.classList.add("attributionLight");

        card.forEach(item => { // change the colour of the cards from dark desaturated blue to grey
            item.classList.remove("cardDark");
            item.classList.add("cardLight");
        })

        font1.forEach(item => { // change the white font to very dark blue
            item.classList.remove("fontDark1");
            item.classList.add("fontLight1");
        })

        font2.forEach(item => {
            item.classList.remove("fontDark2");
            item.classList.add("fontLight2");
        })

        font5.forEach(item => {
            item.classList.remove("fontDark5");
            item.classList.add("fontLight5");
        })
    }

    else { // modetype not found
        console.log("Error");
    }
}