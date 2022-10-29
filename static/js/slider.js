$("#request_slider").slider({
    min: 5,
    max: 15,
    value: 10,
    range: "min",
    animate: "fast",
    slide: function(event, ui) {
        $("#request_slider span").html("<b>&lt;</b>" + ui.value + "<b>&gt;</b>");

    }
});
$("#request_slider span").html("<b>&lt;</b>" + $("#request_slider").slider("value") + "<b>&gt;</b>");
