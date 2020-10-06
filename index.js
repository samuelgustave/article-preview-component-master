$(".share-row").hide();
$(".share-row").click(function(){
    if ($(window).width() >= 700) {
      $(".share-row").hide();
      $(".share-button").addClass("inactive-button");
      $(".share-button").removeClass("active-button");
    }
});

$(".share-button").click(function(){
  if ($(window).width() >= 700) {
    $(".share-row").toggle();
    if($(".share-row").is(':visible') === true) {
      $(".share-button").addClass("active-button");
      $(".share-button").removeClass("inactive-button");
    } else {
      $(".share-button").addClass("inactive-button");
      $(".share-button").removeClass("active-button");
    }
  }
});



$(".activate-share-row").click(function(){
  $(".share-row").show();
  if ($(window).width() < 700) {
    $(".share-row").css("position", "absolute");
    var position = ($(".component").height()) - 100;
    $(".share-row").css("top", position+"px");
    $(".cta").hide();
    $(".triangle").hide();
  } else {
    $(".shr").hide();
  }
  $(".shr").click(function(){
    $(".share-row").hide();
    if ($(window).width() < 700) {
      $(".cta").css("position", "static");
      $(".cta").show();
    }
  });
});
