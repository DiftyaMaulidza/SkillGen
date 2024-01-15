const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("stiky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

let humbergerMenu = document.getElementById("menu-icon");
let navMenu = document.querySelector(".navlist");

humbergerMenu.onclick = () => {
  humbergerMenu.classList.toggle("bx-x");
  navMenu.classList.toggle("open");
};