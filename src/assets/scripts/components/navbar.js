// -----------------------------------------------------------
// MENU by Sebastian Serna - 2016
// -----------------------------------------------------------
// Provisional vanilla code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// MENU RESPONSIVE
// -----------------------------------------------------------

var menu = document.querySelector(".menu"),
    menuShow = document.querySelector(".btnMenu"),
    menuFadeBg = document.querySelector(".menu-modal-bg");

function showMobileBtn() {
    if (window.innerWidth <= 768) {
        menu.className = "menu-mobile";
    } else {
        menu.className = "menu";
    }
 }

// On click Events
menuShow.onclick = function(event){
     menu.className += " is-visible";
     menuFadeBg.className += " is-visible";
     event.preventDefault();
};

// Shame but works
menuFadeBg.onclick = function(event){
     // Delete and Write menu classes
     menu.className = "";
     menu.className = "menu-mobile";
     // Delete and Write fade screen classes
     menuFadeBg.className = "";
     menuFadeBg.className = "menu-modal-bg";
     event.preventDefault();
};

// ACTIVE MENU ITEM
// -----------------------------------------------------------
/*
  function activeMenuItem() {
    var menulinks = document.querySelector(".menu, .menu-mobile").getElementsByTagName("a"),
        i = 0,
        length = menulinks.length,
        fullpath = location.href.split("#")[0];

    for(; i < length; i++) {
        if(menulinks[i].href.split("#")[0] === fullpath) {
            menulinks[i].className += " active";
        }
    }
}
document.addEventListener("DOMContentLoaded", activeMenuItem);
*/

// Execute Functions
showMobileBtn();
window.onresize = function() {
  showMobileBtn();
}
