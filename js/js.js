$(document).ready(function (){
    $('.slider').slick({
        /*lazyLoad:'ondemand',*/
        waitForAnimate: false,
        speed: 500,
    });
});
$(document).ready(function() {
    $('.song_title').click(function() {
        $(this).toggleClass('active').next().slideToggle(800);
        $('.song_library').css('display:flex;')
    });
});