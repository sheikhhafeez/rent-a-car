// blogslider start


// $(document).on('ready', function () {




//     wow = new WOW(
//         {
//             animateClass: 'animated',
//             offset: 100,
//             callback: function (box) {
//                 console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
//             }
//         }
//     );

//     wow.init();


// });

$(".banner-slider-main").slick({
    dots: true,
    panignation: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});


$(".car-slider-to-slide").slick({
    dots: false,
    panignation: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

