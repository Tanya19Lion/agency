$(function(){

    $(".header__inner-nav").on("click", function(){
        $(".header__menu").addClass("active");
    });

    $(".header__close-btn").on("click", function(){
        $(".header__menu").removeClass("active");
    });

    let block = $("#achievements__inner");
    let blockStatus = true;
    $(window).scroll(function() {
        let scrollEvent = ($(window).scrollTop() > (block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) { 
            blockStatus = false;
            
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });


    new WOW().init();

    var mixer = mixitup('.portfolio__gallery-wrapper');

});


