function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    menu.style.width = menu.style.width === "250px" ? "0" : "250px";
    var bars = document.querySelector(".hamburger-menu");
    bars.classList.toggle("change");
}
