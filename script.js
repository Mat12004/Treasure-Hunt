$(".start-button").click(function() {
    $(".message-1").css("display", "block");
    
});

$(".message-1").dblclick(function() {
    $(".message-2").css("color", "red");

});

$(".message-2").hover(function() {
    $(".message-3").css("background-color", "black");

});

$(".map").click(function() {
    $(".message-4").css("display", "block");

});

$(".message-4").click(function() {
    $("body").css("color", "purple");

});

$(".secret").click(function() {
    $(".treasure").fadeIn();

});

$(".treasure").click(function() {
    $(".clue-container").fadeOut();
    $(".treasure").fadeOut();

});