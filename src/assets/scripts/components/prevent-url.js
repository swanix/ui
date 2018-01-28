// -----------------------------------------------------------
// PREVENT URLs
// -----------------------------------------------------------
// Provisional code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// PREVENT DEFAULT for href="#" links
// -----------------------------------------------------------

var nullAnchors = document.querySelectorAll("a[href='#']");

for (var i = 0; i < nullAnchors.length; i++) {
    nullAnchors[i].addEventListener("click", preventDefaultEvent);
}

function preventDefaultEvent(event) {
    event.preventDefault();
}


// REMOVE HASH IN URL (Provisional)
// -----------------------------------------------------------

// Hashchange event
// Ref https://developer.mozilla.org/es/docs/Web/API/WindowEventHandlers/onhashchange
window.addEventListener("hashchange", removeHash, false);

// Seen on http://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-with-javascript-without-page-refresh
function removeHash () {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}
