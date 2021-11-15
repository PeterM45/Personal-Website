const marquee = document.querySelector("marquee");

function isIOSDevice() {
  return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}
if (isIOSDevice()) {
  marquee.setAttribute("scrollamount", "1");
}

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

var btc = document.getElementById("btc");
var eth = document.getElementById("eth");
var ada = document.getElementById("ada");
var doge = document.getElementById("doge");
var xrp = document.getElementById("xrp");
var uni = document.getElementById("uni");
var sol = document.getElementById("sol");
var dot = document.getElementById("dot");

url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cdogecoin%2Cripple%2Cuniswap%2Csolana%2Cpolkadot&vs_currencies=CAD";

window.onload = function () {
  Clock();
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(JSON.stringify(data["bitcoin"]));
      var btcValue = data["bitcoin"]["cad"];
      var ethValue = data["ethereum"]["cad"];
      var adaValue = data["cardano"]["cad"];
      var dogeValue = data["dogecoin"]["cad"];
      var xrpValue = data["ripple"]["cad"];
      var uniValue = data["uniswap"]["cad"];
      var solValue = data["solana"]["cad"];
      var dotValue = data["polkadot"]["cad"];

      btc.innerHTML = "BTC " + "$" + btcValue;
      eth.innerHTML = "ETH " + "$" + ethValue;
      ada.innerHTML = "ADA " + "$" + adaValue;
      doge.innerHTML = "DOGE " + "$" + dogeValue;
      xrp.innerHTML = "XRP " + "$" + xrpValue;
      uni.innerHTML = "UNI " + "$" + uniValue;
      sol.innerHTML = "SOL " + "$" + solValue;
      dot.innerHTML = "DOT " + "$" + dotValue;
    });
};
