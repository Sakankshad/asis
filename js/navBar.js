$(document).ready(function(){
    $('.menu-close').hide();

    $('.menu').click(function(){
        $('.menu-panel').toggleClass('show');
        $('.menu-background').toggleClass('show');
        $('.menu').hide();
        $('.menu-close').show();
    });
    $('.menu-close').click(function(){
        $('.menu-panel').removeClass('show');
        $('.menu-background').removeClass('show');
        $('.menu').show();
        $('.menu-close').hide();
    });
});