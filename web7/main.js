document.addEventListener('DOMContentLoaded', function () {
$('.multiple-items').slick({
    infinite: true,          //бесконечная прокрутка
    dots: true,              //точки
    slidesToShow: 4,         //слайды для показа
    slidesToScroll: 4,       //слайды для прокуртки

    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }
    ]
});
})

