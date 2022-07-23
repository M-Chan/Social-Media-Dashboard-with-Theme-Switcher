
const screen = document.getElementById("container");
const banner = document.getElementById("banner");
const toggleButton = document.getElementById("toggle");

// toggleButton.addEventListener("onclick", toggleDarkMode());

function toggleDarkMode() {
    if(screen.classList.contains("containerLight")) {
        console.log("In Light Mode")
        console.log("In Light Mode switching to Dark Mode")
        screen.classList.remove("containerLight")
        banner.classList.remove("bannerLight")
        screen.classList.add("containerDark")
        banner.classList.add("bannerDark")
    }
    else if (screen.classList.contains("containerDark")) {
        console.log("In Dark Mode")
        console.log("In Dark Mode switching to Light Mode")
        screen.classList.remove("containerDark")
        banner.classList.remove("bannerDark")
        screen.classList.add("containerLight")
        banner.classList.add("bannerLight")
    }
    else {
        console.log("Error")
    }
}