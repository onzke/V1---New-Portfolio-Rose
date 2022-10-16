$(".blocMouse").mouseenter(function () {
  $(".blocMouse").animate({ left: "508px", top: "70px" });
  $(".cableMouse").animate({ height: "31px", left: "407px", bot: "13px" });
});

$(".blocMouse").mouseleave(function () {
  $(".blocMouse").animate({ left: "510px", top: "68px" });
  $(".cableMouse").animate({ height: "20px", left: "412px", bot: "15px" });
});

$(".blocMouse").click(function () {
  $(".stringScreen").css({
    visibility: "visible",
  });
  $(".stringScreen").css({ left: "220px" });
  $(".stringScreen").animate({ left: "240px" }, 3);
  $("#name").css({
    visibility: "visible",
  });
});

$("#name").blur(function () {
  var stringName = $("#name").val();
  $("input")
    .keyup(function () {
      var stringName = $("#name").val();
      $("#answerName")
        .text("Enchantée " + stringName + " ! ")
        .css({ visibility: "visible" });
    })
    .keyup();
});

$(".key").click(function () {
  $(".key").css({ boxShadow: "2px 2px 0px 0px #DFDFC7" });
});
