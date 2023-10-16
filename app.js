$(document).ready(function () {
  $("#start").click(function () {
    let time = 30;
    let points = 0;
    $("#points").html(`points ${points}`);
    $(".timer").html(`${time}s`);
    $("img").click(function () {
      points++;
      $("#points").html(`points ${points}`);
      $(this).hide();
    });
    $("img").hide();

    SInterval = setInterval(function () {
      moleAppear();
    }, 750);

    timeInterval = setInterval(function () {
      time--;
      $(".timer").html(`${time}s`);
      if (time === 0) {
        gameover();
      }
    }, 1000);

    $("#stop").click(function () {
      gameover();
    });
  });
});

function moleAppear() {
  var random = Math.floor(Math.random() * jQuery("img").length);
  jQuery("img").hide().eq(random).show();
}

function gameover() {
  clearInterval(SInterval);
  clearInterval(timeInterval);
  $("img").hide();
}

