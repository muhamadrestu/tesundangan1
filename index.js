var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
AOS.init();

window.onload = function () {
  document.getElementById("mySong").play();
};

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "/images/pause2.png";
  } else {
    mySong.pause();
    icon.src = "/images/play2.png";
  }
};
