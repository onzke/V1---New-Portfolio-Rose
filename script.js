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
      var game = document.getElementsByClassName("openScreen")[0];
      var media = document.querySelector("video");
      var controls = document.querySelector(".controls");
      var controler = document.querySelector(".controler");

      var play = document.querySelector(".play");
      var stop = document.querySelector(".stop");
      var remove = document.querySelector(".remove");

      media.style.visibility = "visible";

      play.addEventListener("click", playPauseMedia);
      stop.addEventListener("click", stopMedia);
      remove.addEventListener("click", removeVideo);
      media.addEventListener("ended", stopMedia);

      function playPauseMedia() {
        if (media.paused) {
          play.setAttribute("data-img", "video");
          media.play();
          media.setTime();
        } else {
          play.setAttribute("data-img", "video");
          media.pause();
          media.setTime();
        }
      }
      playPauseMedia();

      function stopMedia() {
        media.pause();
        media.currentTime = 0;
        play.setAttribute("data-img", "videoOff");
      }

      function removeVideo() {
        media.remove();
        remove.setAttribute("data-img", "exitVideo");
        remove.remove();
        play.remove();
        stop.remove();
        game.style.visibility = "hidden";
      }
    }
    playVideo();
  });
});

// opening Book.

$(".book3").mouseenter(function () {
  $(".book3").animate({ left: 600 }, 10).animate({ top: 200 }, 10);
  $(".book3").addClass("openBook");
});

$(".book3").click(function () {
  $(".book3").animate({ left: 360 }, 10).animate({ top: 518 }, 10);
  $(".book3").removeClass("openBook");
});

// Switch On-Off

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
