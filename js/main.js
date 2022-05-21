$(function () {
  $(".header_slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="template/prew.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="template/next.svg" alt=""></button>',
    vertical: true,
  });

  $(".product_name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".product_content",
    vertical: true,

    prevArrow:
      '<button type="button" class="prod_prev"><img src="template/prod_prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="prod_next"><img src="template/prod_next.svg" alt=""></button>',
  });
  $(".product_content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product_name",
    dots: false,
    // fade: true,  включить, когда будут разные описания
    arrows: false,
    vertical: true, // выключить, когда включат fade
  });
});
