var ham = document.querySelector(".hamburger");
var navList = document.querySelector(".nav_list");

ham.addEventListener("click", () => {
    navList.classList.toggle("active");   
});