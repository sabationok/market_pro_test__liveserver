// ================================ SLIDER__BRANDS
$(document).ready(function () {
  // тут вказується клас DIVчика яз якого потрібно зробити слайдер
  $('.slick__brands-slider').slick({
    dots: true,
    // dots: false,
    infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,

    /*responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]*/

    // prevArrow: '<button type="button" class="slick-prev">&#60;</button>',
    // nextArrow: '<button type="button" class="slick-next">&#62;</button>',
  });
});

