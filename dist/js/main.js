//select dom items

const menuBtn = document.querySelector ('.menu-btn');
const menu = document.querySelector ('.menu');
const menuNav = document.querySelector ('.menu-nav');
const menuPablo = document.querySelector ('.menu-pablo');
const navItems = document.querySelectorAll ('.nav-item');

// set initial state of menu

let showMenu = false;

menuBtn.addEventListener ('click', toggleMenu => {
  if (!showMenu) {
    showMenu = true;
    menuBtn.classList.add ('close');
    menu.classList.add ('show');
    menuNav.classList.add ('show');
    menuPablo.classList.add ('show');
    navItems.forEach (item => {
      item.classList.add ('show');
    });
  } else {
    showMenu = false;
    menuBtn.classList.remove ('close');
    menu.classList.remove ('show');
    menuNav.classList.remove ('show');
    menuPablo.classList.remove ('show');
    navItems.forEach (item => {
      item.classList.remove ('show');
    });
  }
});
