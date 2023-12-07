$(function () {
  // Owl Carousel
  var owl = $(".main-spec_owl-carousel");
  owl.owlCarousel({
    items: 6,
    margin: 10,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      577: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1025: {
        items: 4,
      },
      1025: {
        items: 6,
      },
    },
    navText: [
      '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z" fill="#FFC59E"/><path d="M15.5714 20C15.5714 19.7849 15.6554 19.5699 15.8232 19.4059L21.1034 14.2462C21.4393 13.9179 21.9838 13.9179 22.3196 14.2462C22.6553 14.5743 22.6553 15.1063 22.3196 15.4346L17.6474 20L22.3194 24.5654C22.6552 24.8936 22.6552 25.4256 22.3194 25.7537C21.9837 26.0821 21.4391 26.0821 21.1032 25.7537L15.823 20.594C15.6553 20.43 15.5714 20.215 15.5714 20Z" fill="white" stroke="white"/></svg>',
      '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#FFC59E"/><path d="M24.4286 20C24.4286 19.7849 24.3446 19.5699 24.1768 19.4059L18.8966 14.2462C18.5607 13.9179 18.0162 13.9179 17.6804 14.2462C17.3447 14.5743 17.3447 15.1063 17.6804 15.4346L22.3526 20L17.6806 24.5654C17.3448 24.8936 17.3448 25.4256 17.6806 25.7537C18.0163 26.0821 18.5609 26.0821 18.8968 25.7537L24.177 20.594C24.3447 20.43 24.4286 20.215 24.4286 20Z" fill="white" stroke="white"/></svg>',
    ],
    dots: false,
    margin: 10,
  });
});

$(".next_button").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".prev_button").click(function () {
  owl.trigger("prev.owl.carousel");
});
