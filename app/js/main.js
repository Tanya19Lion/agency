$(function(){

    $(".header__inner-nav").on("click", function(){
        $(".header__menu").addClass("active");
    });

    $(".header__close-btn").on("click", function(){
        $(".header__menu").removeClass("active");
    });

    new WOW().init();

    var mixer = mixitup('.portfolio__gallery-wrapper');

});
