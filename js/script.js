$(document).ready(function(){
    $('.owl-carousel.common-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center: true,

        responsive:{
            0:{
                items:1,
            },
            767:{
                items:3,
                slideBy: 1,
            },
            1000:{
                items:6,
            }
        }
    })

    $('#carousel2').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center: true,

        responsive:{
            0:{
                items:1,
                // slideBy:1,
            },
            768:{
                items:2,
                slideBy:1,
            },
            1000:{
                items:3,
            }
        }
    })
})