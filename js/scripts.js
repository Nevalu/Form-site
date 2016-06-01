$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var beverage = $("#beverage").val();
    var dob = $("#born").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var favoriteColor = $("#color").val();

    $(".beverage").text(beverage);
    $(".born").text(dob);
    $(".radio").text(flavor);
    $(".color").text(favoriteColor);

    $(".answers").show();

    event.preventDefault();

  });
});
