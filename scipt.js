// Variables
let menu = document.querySelector(".jsMenu");
let navList = document.querySelector(".jsNavList");

// Show nav menu on menu button click
menu.addEventListener("click", () => {
  navList.classList.toggle("show-nav");
});
