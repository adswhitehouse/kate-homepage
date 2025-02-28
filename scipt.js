// Variables
let menu = document.querySelector(".jsMenu");
let navList = document.querySelector(".jsNavList");
let displayModeBtn = document.querySelector(".jsDisplayMode");
let displayModeIcon = document.querySelector(".jsDisplayModeIcon");

// Show nav menu on menu button click
menu.addEventListener("click", () => {
  navList.classList.toggle("show-nav");
});

// Theme icon toggles/primary and Secondary colors switch when dark theme is toggled
displayModeBtn.addEventListener("click", () => {
  displayModeIcon.classList.toggle("fa-sun");
  displayModeIcon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark-theme");
});
