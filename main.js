$(function(){
    $('#hum').click(function(){
        $('.bar1, .bar2, .bar3').toggleClass('close');
        $('nav').toggleClass('open');
    });

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var header = $('header').height();
        var position = target.offset().top - header;
        $("html, body").animate({scrollTop:position},speed ,"swing");
        return false;
    });
});