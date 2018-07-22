$('.slider_footer').owlCarousel({
        loop:true,
        margin:30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1100:{
                items:4
            }
        }
    })


    $("body").on('click', '[href*="#"]', function(e){
      var fixed_offset = 100;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
      e.preventDefault();
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin:30,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1100:{
                items:4
            }
        }
    })
        $(document).ready(function(){
            // Фикмированная шапка при скролле
            $("#header").removeClass("default");
            $(window).scroll(function(){
                if ($(this).scrollTop() >20) {
                    $("#header").addClass("default").fadeIn('fast');
                } else {
                    $("#header").removeClass("default").fadeIn('fast');
                };
            });
        });