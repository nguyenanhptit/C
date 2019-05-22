$(function () {
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlith")
                .find("#dro")
                .html("Dropped!");
        }
    });


    $("#resizable").resizable();
    $("#selectable").selectable();

});