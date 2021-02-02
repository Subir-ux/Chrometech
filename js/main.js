!(function ($) {
  "use strict";

  // Preloader active code
  $(window).on("load", function () {
    $("body").css("overflow-y", "visible");
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // Navbar

  $(window).scroll(function () {
    var sticky = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= 600) {
      sticky.addClass("collapsed-nav");
    } else {
      sticky.removeClass("collapsed-nav");
    }
  });

  // Owl Carousel

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });

  $(".custom-owl-carousel-1").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },

      450: {
        items: 2,
        nav: false,
      },

      800: {
        items: 3,
        nav: false,
      },

      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });

  // Activate smooth scroll on page load with hash links in the url

  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // Init AOS

  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  $(window).on("load", function () {
    aos_init();
  });

  // Auto close Navbar when click on link (responsive mode)

  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // jQuery counterUp

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Parallax count-bg
  if ($(window).width() > 992) {
    $(".parallax").parallaxie({
      speed: 0.55,
      offset: 0,
    });
  }

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin

  $(".page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 64,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Morphext jQuery for text rotator

  $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
      // Called after the entrance animation is executed.
    },
  });

  //Skill bar

  $(window).scroll(function () {
    var hT = $("#skill-bar-wrapper").offset().top,
      hH = $("#skill-bar-wrapper").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > hT + hH - 1.4 * wH) {
      jQuery(document).ready(function () {
        jQuery(".skillbar-container").each(function () {
          jQuery(this)
            .find(".skills")
            .animate(
              {
                width: jQuery(this).attr("data-percent"),
              },
              5000
            ); // 5 seconds
        });
      });
    }
  });

  // Owl Advertisement

  $(".owl-ads").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    rewind: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Team owl slider

  $(".owl-teams-one").owlCarousel({
    stagePadding: 0,
    loop: true,
    margin: 10,
    nav: true,
    lazyLoad: true,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 500,

    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 1,
      },

      991: {
        autoplay: false,
        mouseDrag: false,
        items: 1,
      },
    },
  });

  var mainSlider;

  $(document).ready(function () {
    mainSlider = $(".owl-teams-one");
    mainSlider.on("changed.owl.carousel", function (property) {
      var current = property.item.index;
      var prev = $(property.target)
        .find(".owl-item")
        .eq(current)
        .prev()
        .find("img")
        .attr("src");
      var next = $(property.target)
        .find(".owl-item")
        .eq(current)
        .next()
        .find("img")
        .attr("src");

      var prevText = $(property.target)
        .find(".owl-item")
        .eq(current)
        .prev()
        .find("h4")
        .html();
      var nextText = $(property.target)
        .find(".owl-item")
        .eq(current)
        .next()
        .find("h4")
        .html();

      $(".navPrev").find("img").attr("src", prev);
      $(".navNext").find("img").attr("src", next);

      $(".navPrev").find("h4").html(prevText);
      $(".navNext").find("h4").html(nextText);
    });
  });

  $(".navNext").on("click", function () {
    mainSlider.trigger("next.owl.carousel", [300]);
    return false;
  });

  $(".navPrev").on("click", function () {
    mainSlider.trigger("prev.owl.carousel", [300]);
    return false;
  });

  // Testimonial

  $("#testimonial-quote").owlCarousel({
    items: 1,
    autoplay: 2500,
    autoplayHoverPause: true,
    mouseDrag: false,
    loop: true,
    margin: 30,
    dots: true,
    dotsContainer: "#owl-thumbs",
    nav: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      1280: {
        items: 1,
      },
      600: {
        items: 1,
      },
      320: {
        items: 1,
      },
    },
  });

  //scroll to appear
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) $(".scroll-top-arrow").fadeIn("slow");
    else $(".scroll-top-arrow").fadeOut("slow");
  });

  //Click event to scroll to top
  $(document).on("click", ".scroll-top-arrow", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  //scroll sections
  $(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1200
    );
  });

  
})(jQuery);
