$(function () {
    $("#hidden").click(function () {
        $("#text").hide();
    });
    $("#show").click(function () {
        $("#text").show();
    });

    $("#ani").click(function () {
       var div = $("#hello");
       div.animate({left:'500px',fontSize:'100px', color:'red'},"normal");

    });

});

