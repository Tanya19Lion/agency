$(function(){

    $('.about__items_content .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.about__items_content').find('.tab-item').removeClass('active-tab').hide();
            $('.about__items_content .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

    $(".close_btn").on("click", function(){
        $(".about__items-info").slideUp();
    })

    $(".header__inner-nav").on("click", function(){
        $(".header__menu").addClass("active");
    })

    $(".header__close-btn").on("click", function(){
        $(".header__menu").removeClass("active");
    })

    new WOW().init();

    var mixer = mixitup('.portfolio__gallery-wrapper');

});
