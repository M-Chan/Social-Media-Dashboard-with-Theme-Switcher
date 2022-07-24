
const screen = document.getElementById("container");
const banner = document.getElementById("banner");
const toggleButton = document.getElementById("toggle");

let card = document.querySelectorAll(".card");
let font1 = document.querySelectorAll(".font1");
let font2 = document.querySelectorAll(".font2");

function toggleDarkMode() {
    if(screen.classList.contains("containerLight")) {
        console.log("In Light Mode");
        console.log("In Light Mode switching to Dark Mode");
        screen.classList.remove("containerLight");
        banner.classList.remove("bannerLight");
        screen.classList.add("containerDark");
        banner.classList.add("bannerDark");

        card.forEach(item => {
            item.classList.remove("cardLight");
            item.classList.add("cardDark");
        })

        font1.forEach(item => {
            item.classList.remove("fontLight1");
            item.classList.add("fontDark1");
        })

        font2.forEach(item => {
            item.classList.remove("fontLight2");
            item.classList.add("fontDark2");
        })
    }
    else if (screen.classList.contains("containerDark")) {
        console.log("In Dark Mode");
        console.log("In Dark Mode switching to Light Mode");
        screen.classList.remove("containerDark");
        banner.classList.remove("bannerDark");
        screen.classList.add("containerLight");
        banner.classList.add("bannerLight");

        card.forEach(item => {
            item.classList.remove("cardDark");
            item.classList.add("cardLight");
        })

        font1.forEach(item => {
            item.classList.remove("fontDark1");
            item.classList.add("fontLight1");
        })

        font2.forEach(item => {
            item.classList.remove("fontDark2");
            item.classList.add("fontLight2");
        })
    }
    else {
        console.log("Error");
    }
}