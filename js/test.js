function Clock() {
  var rtClock = new Date();

  var h = rtClock.getHours();
  var m = rtClock.getMinutes();
  var s = rtClock.getSeconds();
  var am = "AM";

  if (h > 12) {
    h = h - 12;
    var am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("clock").innerHTML =
    h + "  :  " + m + "  :  " + s + " " + am;
  var t = setTimeout(Clock, 500);
}
