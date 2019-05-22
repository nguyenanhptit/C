$(function () {
    $("#accordion").accordion();

    var list = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: list
    });

    $("#datepicker").datepicker();

    $("#dialog").dialog();

    $("#slider").slider();

    var spinner = $("#spinner").spinner();

    $("#disable").on("click", function () {
        if (spinner.spinner("option", "disable")) {
            spinner.spinner("enable");
        } else {
            spinner.spinner("disable");
        }
    });

    $("#destroy").on("click", function () {
        if (spinner.spinner("instance")) {
            spinner.spinner("destroy");
        } else {
            spinner.spinner();
        }
    });

    $("#getvalue").on("click", function () {
        alert(spinner.spinner("value"));
    })

    $("#setvalue").on("click", function () {
        spinner.spinner("value", 5);
    })

    $("button").button();

    $("#tabs").tabs();


    $("#button").on("click", function () {
        $("#effect").addClass("newClass", 1000, callback());
    });

    function callback() {
        setTimeout(function () {
            $("#effect").removeClass("newClass");
        }, 1500);
    }
});