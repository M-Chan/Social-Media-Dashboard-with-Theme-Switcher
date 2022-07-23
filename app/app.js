
const screen = document.getElementById("container");
const banner = document.getElementById("banner");
const toggleButton = document.getElementById("toggle");

let card = document.querySelectorAll(".card");

// toggleButton.addEventListener("onclick", toggleDarkMode());

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
    }
    else {
        console.log("Error");
    }
}