function Clock() {
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();
  var amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").innerHTML =
    hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
  var t = setTimeout(Clock, 500);
}
