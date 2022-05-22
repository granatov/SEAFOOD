$(function () {
  $(".header_slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="template/prew.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="template/next.svg" alt=""></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 371,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 891,
        settings: {
          vertical: false,
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 461,
        settings: {
          vertical: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $(".product_content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product_name",
    dots: false,
    // fade: true,  включить, когда будут разные описания
    arrows: false,
    vertical: true, // выключить, когда включат fade
    responsive: [
      {
        breakpoint: 891,
        settings: {
          vertical: false,
        },
      },
    ],
  });

  $(".menu_btn").on("click", function () {
    $(".menu_list").toggleClass("menu_list_active");
  });
});
