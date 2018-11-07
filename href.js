


/*$( document ).ready(function() {*/
$('a[href^="#launch"]').click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;
        
        $('html, body').animate({
        scrollTop: position
        }, 900, 'linear');
});
/*});*/



