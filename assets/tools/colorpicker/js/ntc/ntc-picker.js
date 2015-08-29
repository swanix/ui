/**
 * Created by Chirag Mehta - http://chir.ag/projects/ntc
 */

$(document).ready(function() {
  ntc_main.init();
});

var ntc_main = {

  fb: null,

  init: function() {

    srtnm = ntc.names;
    srtnm.sort(ntc_main.nameSort);
    clrop = new Array();

    for(i = 0; i < srtnm.length; i++)
    {
      clr = srtnm[i][0];
      rgb = ntc.rgb("#" + clr);
      alt = ((rgb[0] + rgb[1] + rgb[2])/3 < 128);
      clrop.push("<option value='" + clr + "' " + (alt ? "class='w'" : "") + "style='background:#" + clr + "'>" + srtnm[i][1] + "</option>");
    }

    $("#colorpick").html("<select id=\"colorop\"><option value=\"\">Select a Color:</option>" + clrop.join() + "</select>");

    ntc_main.fb = $.farbtastic('#picker', ntc_main.setColor);
    $("#colorinp").change(ntc_main.inpColor);
    $("#colorinp").keyup(ntc_main.inpColor);
    $("#colorinp").keydown(ntc_main.inpColor);
    $("#colorop").change(ntc_main.inpColorList);
    ntc_main.setWheel((window.location.hash.length == 7 ? window.location.hash : "#6195ED"));
  },

  inpColor: function() {
    var clr =  $("#colorinp").get(0).value;
    if(clr.substring(0, 1) == "#" && clr.length == 7)
      return ntc_main.setWheel(clr);
    if(clr.substring(0, 1) != "#" && clr.length == 6)
      return ntc_main.setWheel("#" + clr);
  },

  inpColorList: function() {
    if($("#colorop").get(0).value != "")
      return ntc_main.setWheel("#" + $("#colorop").get(0).value);
  },

  nameSort: function(a, b) {
    return (a[1] > b[1] ? 1 : (a[1] < b[1] ? -1 : 0));
  },

  setColor: function(clr) {
    $("#colorbox").css({backgroundColor: clr});
    var rgb = ntc.rgb(clr);
    $("#colorinp").get(0).value = clr.toUpperCase();
    $("#colorrgb").html("RGB: " + rgb[0] + ", " + rgb[1] + ", " + rgb[2]);

    n_match = ntc.name(clr);
    $("#colorname").html(n_match[1] + (n_match[2] ? "<sup id='solid'>solid</sup>" : "<sup>approx.</sup>"));
    $("#colorsolid").css({backgroundColor: n_match[0]});
    window.location.hash = clr.toUpperCase();
  },

  setWheel: function(clr) {
    ntc_main.fb.setColor(clr);
  }

}