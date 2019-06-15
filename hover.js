var left = $('#btn').offset().left;

$("#btn").hover(
  function() {
    $("#btn").css({
      left: left
    }).animate({
      "right": "0px"
    }, "slow");
  }
);
