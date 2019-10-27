$(function () {
  var sWidth = $(".slider_box1").width();
  var len = $(".slider_box1 .silder_panel1").length;
  var index = 0;
  var picTimer;

  // create button
  var btn = "<a class='prev'></a><a class='next'></a>";
  $(".slider_box1").append(btn);

  // create navbar pictures
  for (var i = 0; i < len; i++) {
    $imgUrl = $(".silder_panel1").eq(i).find("img").attr("src");
    // console.log($imgUrl)
    $navItem = '<div class="silder_nav_item1"><img src="' + $imgUrl + '"></div>';
    $(".silder_nav1").append($navItem);
  }

  // re-arrange slides
  $(".slider_box1 .silder_con1").css({
    "width": sWidth * (len + 2),
    "left": -sWidth
  });
  $(".silder_panel1").eq(0).clone().appendTo($(".silder_con1"));
  $(".silder_panel1").eq(len - 1).clone().prependTo($(".silder_con1"));

  // hover
  $(".slider_box1 .silder_nav1 .silder_nav_item1").mouseenter(function () {
    index = $(".slider_box1 .silder_nav1 .silder_nav_item1").index(this);
    showPics(index);
  }).eq(0).trigger("mouseenter");

  // Prev
  $(".slider_box1 .prev").click(function () {
    index -= 1;
    showPics(index);
    // console.log(index);
    if (index == -1) {
      index = len - 1;
    }
  });

  // Next
  $(".slider_box1 .next").click(function () {
    index += 1;
    showPics(index);
    // console.log(index);
    if (index >= len) {
      index = 0;
    }
  });

  // autoplay
  $(".slider_box1").hover(function () {
    clearInterval(picTimer);
  }, function () {
    // console.log("Start")
    showPics(index);
    picTimer = setInterval(function () {
      $(".slider_box1 .next").trigger("click");
    }, 4000);
  }).trigger("mouseleave");

  // showPics
  function showPics(index) {
    // position
    var nowLeft = -(index + 1) * sWidth;
    if (nowLeft == 0) {
      $(".slider_box1 .silder_con1").stop(true, false).animate({
        "left": nowLeft
      }, 300, function () {
        $(".slider_box1 .silder_con1").stop(true, false).css("left", -sWidth * len);
      });
    } else if (nowLeft == -(len + 1) * sWidth) {
      $(".slider_box1 .silder_con1").stop(true, false).animate({
        "left": nowLeft
      }, 300, function () {
        $(".slider_box1 .silder_con1").stop(true, false).css("left", -sWidth);
      });
    } else {
      $(".slider_box1 .silder_con1").stop(true, false).animate({
        "left": nowLeft
      }, 300);
    }
    if (index == -1) {
      index = len - 1;
    }
    if (index >= len) {
      index = 0;
    }
    // nav
    $(".slider_box1 .silder_nav1 .silder_nav_item1").removeClass("current1").eq(index).addClass("current1");
    $(".slider_box1 .silder_nav1 .silder_nav_item1").stop(true, false).animate({
      "opacity": "0.6"
    }, 300).eq(index).stop(true, false).animate({
      "opacity": "1"
    }, 300);
  }
});