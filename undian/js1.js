$('document').ready(function() {
  rollClick();

  $("#close").click(function() {
    $("#world").removeClass("open");
    $("#winner").removeClass("open");
    $("#close").removeClass("open");
    $("#close").hide();
  });

  $('#utama').hide();
});

var drum1 = new Audio("drum1.wav"); // 5s
var drum3 = new Audio("drum3.mp3"); // 30s
var win1 = new Audio("TF2 Victory - Sound Effect.wav"); // buffers automatically when created
var win = new Audio("win.mp3"); // buffers automatically when created

var nameList = [];
let winner = "";
let winner_name = "";
let name = "";

let rollClickCount = 0;

var time_play;

function randomName() {
  var rand = Math.floor(Math.random() * nameList.length);
  name = nameList[rand];
  winner = name;
  winner_name = winner.split("::");
  $('#names').text(winner_name[0]);
}

function rollClick() {

  $('#draw').on('click', function(e) {
    time_play = 10000;
    drum3.play();
    // $('a').hide();
    $('#winner').show();
    $('#names').show();

    $("#attendees li").each(function() {
        if (rollClickCount < 1) {
          nameList.push($(this).text()+'::'+$(this).attr('id'));
        }
    });

    rollClickCount += 1
    
    setDeceleratingTimeout(function() { randomName() }, 10, time_play);
    
    $('#stop').show();
    $('#draw').hide();
    win1.pause();
    win1.currentTime = 0;
    // setTimeout(function() {
    //   $('#winner').show();
    //   $("#winners").prepend('<li>' + winner_name[0] + '</li>');
    //   $(".winner-container").show();
    //   $("#attendees li").remove("#" + winner_name[1]);
    //   // $('a').show();
    //   var winner = $('#names').text();
    //   $('#winner').text(winner);
    //   $('#names').show();
    //   $('#winner').html('<span>Selamat untuk...</span><br>' + winner);

    //   winner = "🎉" + " " + winner + " " + "🎉";

    //   $("#world").addClass("open");
    //   $("#winner").addClass("open");
    //   $("#close").addClass("open");
    //   $("#close").show();
    //   $("#winner").text(winner);

    //   drum3.pause();
    //   drum3.currentTime = 0;
    //   nameList.splice(nameList.indexOf(name), 1);
    //   win1.play();
    // }, 5000);
    
    e.preventDefault();
  });

  $('#stop').on('click', function(e) {
    time_play = 0;
    $('#winner').show();
    $("#winners").append('<li>' + winner_name[0] + '</li>');
    $(".winner-container").show();
    // $("#attendees li").remove("#" + winner_name[1]);
    // $('a').show();
    var winner = $('#names').text();
    $('#winner').text(winner);
    $('#names').show();
    $('#winner').html('<span>Selamat untuk...</span><br>' + winner);

    winner = "🎉" + " " + winner + " " + "🎉";

    $("#world").addClass("open");
    $("#winner").addClass("open");
    $("#close").addClass("open");
    $("#close").show();
    $("#winner").html(winner);

    drum3.pause();
    drum3.currentTime = 0;
    nameList.splice(nameList.indexOf(name), 1);
    win1.play();

    $('#stop').hide()
    $('#draw').show();

    // console.log(nameList.length)
    // drum3.play();
    // // $('a').hide();
    // $('#winner').show();
    // $('#names').show();

    // $("#attendees li").each(function() {
    //   if (rollClickCount < 1) {
    //     nameList.push($(this).text()+'::'+$(this).attr('id'));
    //   }
    // });

    // rollClickCount += 1
    
    // setDeceleratingTimeout(function() { randomName() }, 10, 578);
    
    // setTimeout(function() {
    //   $('#winner').show();
    //   $("#winners").prepend('<li>' + winner_name[0] + '</li>');
    //   $(".winner-container").show();
    //   $("#attendees li").remove("#" + winner_name[1]);
    //   // $('a').show();
    //   var winner = $('#names').text();
    //   $('#winner').text(winner);
    //   $('#names').show();
    //   $('#winner').html('<span>Selamat untuk...</span><br>' + winner);

    //   winner = "🎉" + " " + winner + " " + "🎉";

    //   $("#world").addClass("open");
    //   $("#winner").addClass("open");
    //   $("#close").addClass("open");
    //   $("#close").show();
    //   $("#winner").text(winner);

    //   nameList.splice(nameList.indexOf(name), 1);
    //   win.play();
    // }, 30000);
    
    // e.preventDefault();
  });
}

function setDeceleratingTimeout(callback, factor, times) {
  var internalCallback = function(t, counter) {
    return function() {
      if (time_play != 0) {
        if (--t > 0) {
          window.setTimeout(internalCallback, counter * factor);
          callback();
        }
      }
    }
  }(times, 5);

  window.setTimeout(internalCallback, factor);
};

$(function() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 350;

  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

  PI_2 = 2 * Math.PI;

  canvas = document.getElementById("world");

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = class Confetti {
    constructor() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    replace() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    }

    draw() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
    }

  };

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

});

