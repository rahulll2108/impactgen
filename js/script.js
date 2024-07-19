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

// Function to create the counter effect
const createCounterEffect = (element) => {
    const updateNumber = () => {
        const targetNumber = parseInt(element.dataset.number);
        const initialNum = parseInt(element.innerText);
        const incrementNumber = Math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
            element.innerText = `${initialNum + incrementNumber}+`;
            setTimeout(updateNumber, 10);
        } else {
            element.innerText = `${targetNumber}+`;
        }
    };

    updateNumber();
};

const speed = 200;
const counterNum = document.querySelectorAll(".counter-numbers");

const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the element is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createCounterEffect(entry.target);
            observer.unobserve(entry.target); // Stop observing the element once it has started counting
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

counterNum.forEach(element => {
    observer.observe(element);
});
