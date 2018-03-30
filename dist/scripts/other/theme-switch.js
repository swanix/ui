// -----------------------------------------------------------
//  THEME SWITCH  by Sebastian Serna - 2016
// -----------------------------------------------------------
// Provisional vanilla code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// SWITCH STYLESHEET (Black Swan / White Swan)
// -----------------------------------------------------------

// Execute Function
document.addEventListener("DOMContentLoaded", currentThemeValue);

var btnSwapTheme = document.getElementById("swap-theme"),
    blackSwan = document.styleSheets[0],
    whiteSwan = document.styleSheets[1];

btnSwapTheme.onchange = function() {
  if (whiteSwan.disabled === false) {
      whiteSwan.disabled = true;
      btnSwapTheme.checked = true;
      localStorage.setItem("currentTheme", "black");
  } else {
      whiteSwan.disabled = false;
      btnSwapTheme.checked = false;
      localStorage.setItem("currentTheme", "white");
  }

}

function currentThemeValue() {
    if (localStorage.getItem("currentTheme") === "black" ) {
        whiteSwan.disabled = true;
        btnSwapTheme.checked = true;
    } else {
        whiteSwan.disabled = false;
        btnSwapTheme.checked = false;
    }
}
