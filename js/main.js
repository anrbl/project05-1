$(function () {
    //헤더
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });

    //스크롤
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._sc').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        });
    });


    //메인 슬라이드
    var mainSlide = new Swiper('.main_slide', {
        parallax: true,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
        navigation: {
            nextEl: ".right",
            prevEl: ".left",
        },
    });


    //메뉴슬라이드
    var menuSlide = new Swiper('.menu_slide', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        slideActiveClass: 'on',
        centeredSlides: true,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-145%", 0, -700],
            },
            next: {
                translate: ["145%", 0, -700],
            },
        },
        navigation: {
            nextEl: ".right",
            prevEl: ".left",
        },
    });


    //mainBrand
    $('.tab_link>li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tab_link>li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on').siblings().removeClass('on');
    });


    //to_top
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.to_top').fadeIn() : $('.to_top').fadeOut();
    });

});

