$(document).ready(function(){
    const slider = $("#festival__slider").owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"> <path d="M26.2033 14.5L1.99978 14.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14.1016 2L2.69535 13.7815C2.3112 14.1783 2.3112 14.8217 2.69535 15.2185L14.1016 27" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"> <path d="M1.79666 14.5L26.0002 14.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.8984 2.00001L25.3046 13.7815C25.6888 14.1783 25.6888 14.8217 25.3046 15.2185L13.8984 27" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
        ],
        dots: false,
        /* autoplay: true, */
        autoplayTimeout: 5000,
        smartSpeed: 250,
        items: 1,
        margin: 0,
        
    });
});

$(document).ready(function(){
    const slider = $("#media__slider").owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"> <path d="M26.2033 14.5L1.99978 14.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14.1016 2L2.69535 13.7815C2.3112 14.1783 2.3112 14.8217 2.69535 15.2185L14.1016 27" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"> <path d="M1.79666 14.5L26.0002 14.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.8984 2.00001L25.3046 13.7815C25.6888 14.1783 25.6888 14.8217 25.3046 15.2185L13.8984 27" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
        ],
        dots: false,
        /* autoplay: true, */
        autoplayTimeout: 5000,
        smartSpeed: 250,
        items: 1,
        margin: 0,
        
    });
});

$(document).ready(function(){
    const slider = $("#tourist__slider").owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"> <path d="M26.2033 14.5L1.99978 14.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14.1016 2L2.69535 13.7815C2.3112 14.1783 2.3112 14.8217 2.69535 15.2185L14.1016 27" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"> <path d="M1.79666 14.5L26.0002 14.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.8984 2.00001L25.3046 13.7815C25.6888 14.1783 25.6888 14.8217 25.3046 15.2185L13.8984 27" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
        ],
        dots: false,
       /*  autoplay: true, */
        autoplayTimeout: 5000,
        smartSpeed: 250,
        margin: 30,
        center: true,
        responsive: {
            0: {
                items: 1 // Количество элементов при ширине экрана < 600px
            },
            600: {
                items: 1 // Количество элементов при ширине экрана >= 600px
            },
            1440: {
                items: 4// Количество элементов при ширине экрана >= 1445px
            }
        }
    });
});