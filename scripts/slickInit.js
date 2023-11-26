$(document).ready(function () {
  //слайдер в секции Today's
  $('.today__slick-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: $('.today .slider-btn.right'),
    prevArrow: $('.today .slider-btn.left'),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  //slider в секции categories
  $('.section-categories__slick-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: $('.section-categories .slider-btn.right'),
    prevArrow: $('.section-categories .slider-btn.left'),
    variableWidth: true,
  })

  //слайдер в секции Our Products top
  $('.our-products__slick-carousel_top').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: $('.section-our-products .slider-btn.right'),
    prevArrow: $('.section-our-products .slider-btn.left'),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  })

  //слайдер в секции Our Products bottom
  $('.our-products__slick-carousel_bottom').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    // nextArrow: $('.section-our-products .slider-btn.right'),
    // prevArrow: $('.section-our-products .slider-btn.left'),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  })
})
