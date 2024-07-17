$(document).ready(function(){
    $('.owl-carousel.common-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,

        responsive:{
            0:{
                items:3,
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

        responsive:{
            0:{
                items:1,
                slideBy:1,
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

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;
counterNum.forEach((curElem)=>{
    const updateNumber = ()=>{
        const targetNumber = parseInt(curElem.dataset.numbers);
        const initialNum = parseInt(curElem.innerText);
        const incrementNumber = Math.trunc(targetNumber/speed);
        if (initialNum < targetNumber) {
            curElem.innerText = initialNum+incrementNumber;

            setTimeout(updateNumber, 10);
        }
    };
    updateNumber();
});