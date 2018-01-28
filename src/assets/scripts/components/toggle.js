// -----------------------------------------------------------
// TOGGLE  by Sebastian Serna - 2016
// -----------------------------------------------------------
// Provisional vanilla code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// TOGGLE (Hide / Show element)
// -----------------------------------------------------------

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
