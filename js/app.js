const hamburger = document.querySelector("#menu-icon");
const navmenu = document.querySelector(".navmenu");



hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})