$(".yes-button").dblclick(function() {
    $(" .yes-button, .title").hide();
    $(".title").text("day-1");
    $(".day-1, .firstImage").show();
});

$(".yes").click(function() {
    $(".disney-yes").show();
    $(".day-1").hide();   
});

$(".disney-rain").hover(function() {
    $(".day-2").show();
    $(".day-1, .disney-yes").hide();
});

$(".no").click(function() {
    $(".disney-no").show();
    $(".day-1").hide();
});

$(".pool").hover(function() {
    $(".day-2").show();
    $(".day-1, .disney-no").hide();
});

$(".yes2").click(function() {
    $(".universal-yes, .day-2").show();
    $(".day-2").hide(); 
    $(".disney-yes").hide();
});


$(".no2").click(function() {
    $(".universal-no").show();
    $(".day-2").hide();
    $(".disney-yes").hide();
});