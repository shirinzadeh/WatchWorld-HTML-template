AOS.init({
   duration: 800,
   easing: "slide"
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load("particles-js", "particles.json", function() {
//    console.log("callback - particles.js config loaded");
// });

(function ($) {
   "use strict";

   var isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
         return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
   };

   $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll"
   });

   var fullHeight = function () {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
         $(".js-fullheight").css("height", $(window).height());
      });
   };
   fullHeight();

   // loader
   var loader = function () {
      setTimeout(function () {
         if ($("#ftco-loader").length > 0) {
            $("#ftco-loader").removeClass("show");
         }
      }, 1);
   };
   loader();

   //SMOOTH SCROLL
   $('a[href*="#"]')
      //    // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]').click(function (e) {
         if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
               scrollTop: $(hash).offset().top
            },
               1000
            )
         }
      })

   // Scrollax
   $.Scrollax();

   var carousel = function () {
      $(".home-slider").owlCarousel({
         loop: true,
         autoplay: true,
         margin: 0,
         animateOut: "fadeOut",
         animateIn: "fadeIn",
         nav: false,
         dots: false,
         autoplayHoverPause: false,
         items: 1,
         navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
         responsive: {
            0: {
               items: 1
            },
            600: {
               items: 1
            },
            1000: {
               items: 1
            }
         }
      });
      $(".carousel-testimony").owlCarousel({
         autoplay: true,
         loop: true,
         items: 1,
         margin: 0,
         stagePadding: 0,
         nav: false,
         navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
         responsive: {
            0: {
               items: 1
            },
            600: {
               items: 1
            },
            1000: {
               items: 1
            }
         }
      });

      $(".single-slider").owlCarousel({
         animateOut: "fadeOut",
         animateIn: "fadeIn",
         autoplay: true,
         loop: true,
         items: 1,
         margin: 0,
         stagePadding: 0,
         nav: true,
         dots: true,
         navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
         responsive: {
            0: {
               items: 1
            },
            600: {
               items: 1
            },
            1000: {
               items: 1
            }
         }
      });
   };
   carousel();

   $("nav .dropdown").hover(
      function () {
         var $this = $(this);
         // 	 timer;
         // clearTimeout(timer);
         $this.addClass("show");
         $this.find("> a").attr("aria-expanded", true);
         // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
         $this.find(".dropdown-menu").addClass("show");
      },
      function () {
         var $this = $(this);
         // timer;
         // timer = setTimeout(function(){
         $this.removeClass("show");
         $this.find("> a").attr("aria-expanded", false);
         // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
         $this.find(".dropdown-menu").removeClass("show");
         // }, 100);
      }
   );

   $("#dropdown04").on("show.bs.dropdown", function () {
      console.log("show");
   });

   // scroll
   var scrollWindow = function () {
      $(window).scroll(function () {
         var $w = $(this),
            st = $w.scrollTop(),
            navbar = $(".ftco_navbar"),
            sd = $(".js-scroll-wrap");

         if (st > 150) {
            if (!navbar.hasClass("scrolled")) {
               navbar.addClass("scrolled");
            }
         }
         if (st < 150) {
            if (navbar.hasClass("scrolled")) {
               navbar.removeClass("scrolled sleep");
            }
         }
         if (st > 350) {
            if (!navbar.hasClass("awake")) {
               navbar.addClass("awake");
            }

            if (sd.length > 0) {
               sd.addClass("sleep");
            }
         }
         if (st < 350) {
            if (navbar.hasClass("awake")) {
               navbar.removeClass("awake");
               navbar.addClass("sleep");
            }
            if (sd.length > 0) {
               sd.removeClass("sleep");
            }
         }
      });
   };
   scrollWindow();

   var isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
         return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
   };

   var counter = function () {
      $("#section-counter").waypoint(
         function (direction) {
            if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
               var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
               $(".number").each(function () {
                  var $this = $(this),
                     num = $this.data("number");
                  console.log(num);
                  $this.animateNumber(
                     {
                        number: num,
                        numberStep: comma_separator_number_step
                     },
                     7000
                  );
               });
            }
         },
         { offset: "95%" }
      );
   };
   counter();

   //REMOVE BODY SCROLL WHEN MODAL OPEN
   var $window = $(window),
      $body = $("body"),
      $modal = $(".modal"),
      scrollDistance = 0;

   $modal.on("show.bs.modal", function () {
      // Get the scroll distance at the time the modal was opened
      scrollDistance = $window.scrollTop();

      // Pull the top of the body up by that amount
      $body.css("top", scrollDistance * -1);
   });
   $modal.on("hidden.bs.modal", function () {
      // Remove the negative top value on the body
      $body.css("top", "");

      // Set the window's scroll position back to what it was before the modal was opened
      $window.scrollTop(scrollDistance);
   });

   //animation
   var contentWayPoint = function () {
      var i = 0;
      $(".ftco-animate").waypoint(
         function (direction) {
            if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
               i++;

               $(this.element).addClass("item-animate");
               setTimeout(function () {
                  $("body .ftco-animate.item-animate").each(function (k) {
                     var el = $(this);
                     setTimeout(
                        function () {
                           var effect = el.data("animate-effect");
                           if (effect === "fadeIn") {
                              el.addClass("fadeIn ftco-animated");
                           } else if (effect === "fadeInLeft") {
                              el.addClass("fadeInLeft ftco-animated");
                           } else if (effect === "fadeInRight") {
                              el.addClass("fadeInRight ftco-animated");
                           } else {
                              el.addClass("fadeInUp ftco-animated");
                           }
                           el.removeClass("item-animate");
                        },
                        k * 50,
                        "easeInOutExpo"
                     );
                  });
               }, 100);
            }
         },
         { offset: "95%" }
      );
   };
   contentWayPoint();

   // navigation
   var OnePageNav = function () {
      $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on("click", function (e) {
         e.preventDefault();

         var hash = this.hash,
            navToggler = $(".navbar-toggler");
         $("html, body").animate(
            {
               scrollTop: $(hash).offset().top
            },
            700,
            "easeInOutExpo",
            function () {
               window.location.hash = hash;
            }
         );

         if (navToggler.is(":visible")) {
            navToggler.click();
         }
      });
      $("body").on("activate.bs.scrollspy", function () {
         console.log("nice");
      });
   };
   OnePageNav();

   //view more
   $("#toggle-vm").click(function () {
      var elem = $("#toggle-vm").text();
      var n = $('#categories-none');
      if (elem == "View More") {
         //Stuff to do when btn is in the read more state
         $("#toggle-vm").text("View Less");
         $("#product-dp-none, #categories-none").slideDown();
      } else {
         //Stuff to do when btn is in the read less state
         $("#toggle-vm").text("View More");
         $("#product-dp-none, #categories-none").slideUp();
      }
   });

   //back to top
   $(window).scroll(function () {

      let position = $(this).scrollTop();

      if (position >= 2600) {
         $('#back-to-top').addClass('js-scroll-top');
      }
      else {
         $('#back-to-top').removeClass('js-scroll-top');

      }
   })

   // magnific popup
   $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         verticalFit: true
      },
      zoom: {
         enabled: true,
         duration: 300 // don't foget to change the duration also in CSS
      }
   });

   // gallery img popup
   $(".box-img-popup").magnificPopup({
      type: "image"
   });

   $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
   });

   $(".checkin_date, .checkout_date").datepicker({
      format: "m/d/yyyy",
      autoclose: true
   });

   //GOOGLE MAP API
   // var map;
   // function initMap() {
   //   map = new google.maps.Map(document.getElementById('map'), {
   //     center: { lat: 40.4091, lng: 49.8648 },
   //     zoom: 15
   //   });
   //   var marker = new google.maps.Marker({
   //     position: { lat: 40.4091, lng: 49.8648 },
   //     map: map,
   //     title: 'Baku, Narimanov'
   //   });
   // }

   //about- yt bg video
   // The plugin works only if used under a web server. It doesn’t work if you run the HTML page as file (file://…).
   // https://github.com/pupunzi/jquery.mb.YTPlayer/wiki
   var bgVideo = function () {
      $(".player").mb_YTPlayer();
   };
   bgVideo();

   //magnifying glass efect
   $("#exzoom").exzoom();

})(jQuery);

//product single- search input
const category = document.querySelectorAll(".categories li");
const search = document.querySelector(".sidebar-box__search");
const btn = document.querySelector('.btn-sidebar');

const filterFullNames = term => {
   Array.from(category)
      .filter(category => !category.textContent.toLowerCase().includes(term))
      .forEach(category => category.classList.add("is-filtered"));
   console.log(category);

   Array.from(category)
      .filter(category => category.textContent.toLowerCase().includes(term))
      .forEach(category => category.classList.remove("is-filtered"));
};

search.addEventListener("keyup", () => {
   const term = search.value.trim().toLowerCase();
   filterFullNames(term);
});