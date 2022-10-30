$(document).ready(function () {
  function loop() {
    $(".cloud1").animate({ left: 10 }, 2000).animate({ left: 30 }, 2000, loop);
    $(".cloud2")
      .animate({ left: 125 }, 2000)
      .animate({ left: 140 }, 2000, loop);
    $(".post2").fadeOut(2000);
    $(".post3").fadeIn(4200);
    $(".post2").fadeIn(6000);
    $(".post3").fadeOut(4000);
    $(".openScreen").fadeIn(5000);
  }
  loop();
});

$(document).ready(function () {
  $(".screen").removeClass("player");
  $(".welcome").removeClass("openScreen");
  $(".welcome").addClass("openScreen");
  $(".openScreen").addClass("openGame");
  $("openGame").ready(function () {
    function playVideo() {
      // $(".openScreen").addClass("openGame");
      var media = document.querySelector("video");
      var controls = document.querySelector(".controls");
      var controler = document.querySelector(".controler");

      var play = document.querySelector(".play");
      var stop = document.querySelector(".stop");

      var timerWrapper = document.querySelector(".timer");
      var timer = document.querySelector(".timer span");
      var timerBar = document.querySelector(".timer div");

      timerWrapper.style.visibility = "hidden";
      media.style.visibility = "visible";

      play.addEventListener("click", playPauseMedia);
      stop.addEventListener("click", stopMedia);
      media.addEventListener("ended", stopMedia);

      media.addEventListener("timeupdate", setTime);

      function playPauseMedia() {
        if (media.paused) {
          play.setAttribute("data-img", "video");
          media.play();
        } else {
          timerWrapper.style.visibility = "visible";
          play.setAttribute("data-img", "video");
          media.pause();
        }
      }
      playPauseMedia();

      function stopMedia() {
        timerWrapper.style.visibility = "hidden";
        media.pause();
        media.currentTime = 0;
        play.setAttribute("data-img", "video");

        var intervalFwd;
        var intervalRwd;

        rwd.addEventListener("click", mediaBackward);
        fwd.addEventListener("click", mediaForward);

        function mediaBackward() {
          clearInterval(intervalFwd);
          fwd.classList.remove("active");

          if (rwd.classList.contains("active")) {
            rwd.classList.remove("active");
            clearInterval(intervalRwd);
            media.play();
          } else {
            rwd.classList.add("active");
            media.pause();
            intervalRwd = setInterval(windBackward, 200);
          }
        }

        function mediaForward() {
          clearInterval(intervalRwd);
          rwd.classList.remove("active");

          if (fwd.classList.contains("active")) {
            fwd.classList.remove("active");
            clearInterval(intervalFwd);
            media.play();
          } else {
            fwd.classList.add("active");
            media.pause();
            intervalFwd = setInterval(windForward, 200);
          }
        }
      }

      function windBackward() {
        if (media.currentTime <= 3) {
          stopMedia();
        } else {
          media.currentTime -= 3;
        }
      }

      function windForward() {
        if (media.currentTime >= media.duration - 3) {
          stopMedia();
        } else {
          media.currentTime += 3;
        }
      }

      function setTime() {
        var minutes = Math.floor(media.currentTime / 60);
        var seconds = Math.floor(media.currentTime - minutes * 60);
        var minuteValue;
        var secondValue;

        if (minutes < 10) {
          minuteValue = "0" + minutes;
        } else {
          minuteValue = minutes;
        }

        if (seconds < 10) {
          secondValue = "0" + seconds;
        } else {
          secondValue = seconds;
        }

        var mediaTime = minuteValue + ":" + secondValue;
        timer.textContent = mediaTime;

        var barLength = timerWrapper * (media.currentTime / media.duration);
        timerBar.setAttribute("data-icon", "P");
        timerBar.style.width = barLength + "px";
      }
      rwd.classList.remove("active");
      fwd.classList.remove("active");
      clearInterval(intervalRwd);
      clearInterval(intervalFwd);
    }
    playVideo();
  });
});

$(".switch").mouseenter(function () {
  $(".light").css("backgroundColor", "#f4f494");
  $(".containerDesign").css("backgroundColor", "#38bbc4");
  $(".window").css("backgroundColor", "#21272a");
  $(".cloud1").css("opacity", "60%");
  $(".cloud2").css("opacity", "60%");
});

$(".switch").mouseout(function () {
  $(".light").css("backgroundColor", "#ececd3");
  $(".containerDesign").css("backgroundColor", "#289fa7");
  $(".window").css("backgroundColor", "#839faa");
  $(".cloud1").css("opacity", "100%");
  $(".cloud2").css("opacity", "100%");
});

// Vidéo
