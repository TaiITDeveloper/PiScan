$(function(){
    $('a.update').click(function(event){
        event.preventDefault();
        var toggleId = $(this).attr('href');
        $(toggleId).toggle(300);
        $("#accountEmail").focus();
        $(this).toggle();
    });
    $("#accountEmail").focus();
});
