$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true, // Enable this for right-to-left support
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
