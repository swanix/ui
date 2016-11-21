// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Swan UI 0.1.0
// Provisional Vanilla Javascript
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// --------------------------------------------------------------
// MOBILE MENU
// --------------------------------------------------------------
// This solution is temporal

var menu = document.getElementById("menu-main");
var menuShow = document.getElementById("btnMenu");
var menuFadeBg = document.getElementById("fadeScreen");

function showMobileBtn() {
    if (window.innerWidth <= 768) {
        menu.className = "menu-mobile";
    } else {
        menu.className = "menu";
    }
 }

// Execute Function
showMobileBtn();
window.onresize = function() {
  showMobileBtn();
}

// On click Events ::::::::::::::::::

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
     menuFadeBg.className = "menu-mobile-fade-screen";
     event.preventDefault();
};

// --------------------------------------------------------------
// ACTIVE MENU ITEM
// --------------------------------------------------------------
// This solution is temporal
// This function is very slow "thanks" to the native onload method

window.onload = function() {
    var menulinks = document.getElementById("menu-main").getElementsByTagName("a"),
        i = 0,
        length = menulinks.length,
        fullpath = location.href.split("#")[0];

    for(; i < length; i++) {
        if(menulinks[i].href.split("#")[0] === fullpath) {
            menulinks[i].className += " active";
        }
    }
}

// --------------------------------------------------------------
// PREVENT DEFAULT for href="#" links
// --------------------------------------------------------------
// This solution is temporal

var nullAnchors = document.querySelectorAll('a[href="#"]');

for (var i = 0; i < nullAnchors.length; i++) {
    nullAnchors[i].addEventListener("click", preventDefaultEvent);
}

function preventDefaultEvent(e) {
    e.preventDefault();
}

// --------------------------------------------------------------
// TOGGLE (Hide / Show element)
// --------------------------------------------------------------
// This solution is temporal

var toggleBtn = document.querySelectorAll(".js-toggle");

for (var i = 0; i < toggleBtn.length; i++) {

    toggleBtn[i].addEventListener("click", function (event) {
      var nextEl = this.nextElementSibling;

      if (nextEl.className === "js-toggle-hidden") {
          nextEl.className = "js-toggle-visible";
      } else {
          nextEl.className = "js-toggle-hidden";
      }
  });
}
