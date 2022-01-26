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

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${
          index / 7 + 2
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

setTimeout(function () {
  document.querySelector(".about-me-section").classList.remove("hide");
  document.querySelector(".projects-section").classList.remove("hide");
  document.querySelector(".nav-links").classList.remove("disabled");
  document.querySelector(".burger").classList.remove("disabled");
  document.querySelector(".navbar-section").classList.remove("hide");
  /*
  document
    .querySelector(".about-me-section")
    .scrollIntoView({ behavior: "smooth", block: "center" });
    */
}, 8000);

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px 100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
