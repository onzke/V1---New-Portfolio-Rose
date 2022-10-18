$(document).ready(function () {
  function loop() {
    $(".cloud1").animate({ left: 10 }, 2000).animate({ left: 30 }, 2000, loop);
    $(".cloud2")
      .animate({ left: 125 }, 2000)
      .animate({ left: 140 }, 2000, loop);
  }

  loop();
});

$(".switch").click(function () {
  $(".light").css("backgroundColor", "#f4f494");
  $(".containerDesign").css("backgroundColor", "#38bbc4");
  $(".window").css("backgroundColor", "#21272a");
  $(".cloud1").css("opacity", "60%");
  $(".cloud2").css("opacity", "60%");
});

$(".switch").dblclick(function () {
  $(".light").css("backgroundColor", "#ececd3");
  $(".containerDesign").css("backgroundColor", "#289fa7");
  $(".window").css("backgroundColor", "#839faa");
  $(".cloud1").css("opacity", "100%");
  $(".cloud2").css("opacity", "100%");
});
