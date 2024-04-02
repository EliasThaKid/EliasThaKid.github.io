
const navButtons = document.getElementsByClassName('nav-button');
const popupMenus = document.getElementsByClassName('popup-menu');
const menu = document.querySelector('#mobile-menu');
const mobileMenu = document.querySelector('#popup-nav-mobile');
const mobileLinks = document.querySelector('.mobile-list');


var on = false;

mobileMenu.style.height = "0px";
mobileMenu.style.padding = "0px";


for (let i = 0; i < popupMenus.length; i++) {
    popupMenus[i].style.display = "none";
}



menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
});

menu.addEventListener("click", toggleMobileMenu);



function toggleMobileMenu()  {
    on = !on;
    mobileMenu.style.height = on ? "350px" : "0px";
    mobileMenu.style.padding = on ? "80px, 0px" : "0px";
}




