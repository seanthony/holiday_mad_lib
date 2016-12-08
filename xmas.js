$(document).ready(function() {
    $("button").click(function() {
        $("#questions").hide(1000);
        var l = $("#word_form").children('input');
        for(var c = 0; c < l.length; c++){
          var input_value = l[c].value;
          var class_name = '.' + l[c].name;
          $(class_name).text(input_value);
        }
        $("#lyrics").show(1000);
    });
});
