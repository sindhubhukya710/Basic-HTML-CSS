const menubtn = document.getElementById("menu-btn");
const navlinks = document.querySelector(".nav-links");
menubtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});