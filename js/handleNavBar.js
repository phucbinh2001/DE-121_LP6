/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  document.getElementById("navbar").style.background =
    "linear-gradient(90deg, #00092b 0%, #4a289c 51.56%, #00092b 100%)";
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }

  //Trong suốt nền nếu về đầu trang
  if (currentScrollPos === 0) {
    document.getElementById("navbar").style.background = "transparent";
  }
  prevScrollpos = currentScrollPos;
};
