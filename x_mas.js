$(document).ready(function() {
    $('button').click(function() {
        $('#question_stuff').hide(1000);
        $('#first_name').text($('#fname').val());
        $('#last_name').text($('#lname').val());
        $('#response_stuff').show(1000);
    });
});
