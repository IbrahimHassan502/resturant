/* global flipdown, console, document,$, console, window, setTimeout, FlipDown*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
/*eslint no-unused-vars: off, no-unused-labels: off*/
$(function () {
  "use strict";

  $(".loaderbig").fadeOut(1000, function () {
    $(".loaderbig").remove();
  });
  $("#picker").datetimepicker({
    timepicker: false,
    format: "d/m/Y",
  });
  $("#clockpicker").clockpicker({
    placement: "bottom",
    align: "left",
    autoclose: true,
  });
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    center: true,
    dots: false,
    navText: [
      "<div class='testinav nav1'><i class='bx bxs-chevron-left'></i>prev</div>",
      "<div class='testinav nav2'>next<i class='bx bxs-chevron-right'></i></div>",
    ],
  }); //end owl
  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
    center: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      374: { items: 2, center: false },
      567: { items: 3, center: true },
    },
    navText: [
      "<div class='testinav nav1'><i class='bx bxs-chevron-left'></i>prev</div>",
      "<div class='testinav nav2'>next<i class='bx bxs-chevron-right'></i></div>",
    ],
  }); //end owl
  $(".owl-three").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    center: true,
    dots: false,
    nav: true,
    navText: [
      "<div class='testinav nav1'><i class='bx bxs-chevron-left'></i>prev</div>",
      "<div class='testinav nav2'>next<i class='bx bxs-chevron-right'></i></div>",
    ],
  }); //end owl

  var onedayfromnow = new Date().getTime() / 1000 + 86400 + 1;
  var flipdown = new FlipDown(onedayfromnow, {
    theme: "light",
  });
  flipdown.start();

  $(".toggbutt").on("click", function () {
    $(this).toggleClass("active");
    $(".oversbig").toggleClass("active");
    $("header").toggleClass("althead");
    $(".headmenu").toggleClass("active");
    $(".headmenu.active").css("z-index", 10);

    setTimeout(function () {
      $(".headmenu").not(".active").css("z-index", -1);
    }, 1000);
  }); //end on

  $("body").niceScroll();

  $(".selected").focusin(function () {
    $(".selectbox1").addClass("active");
  });
  $(".selected").focusout(function () {
    $(".selectbox1").removeClass("active");
  });

  $(".selected2").focusin(function () {
    $(".selectbox2").addClass("active");
  });
  $(".selected2").focusout(function () {
    $(".selectbox2").removeClass("active");
  });

  $(".chk").on("change", function () {
    if (this.checked) {
      $(".lab").removeClass("altlab");
      $(this).next().addClass("altlab");
      if ($(this).hasClass("chk1")) {
        $(".selected").val($(this).val());
      }
      if ($(this).hasClass("chk2")) {
        $(".selected2").val($(this).val());
      }
    }
  });
  $(".addbox").on("click", function () {
    $(this).siblings(".addlist").toggleClass("altaddlist");
  });
  $(".menubtn").on("click", function () {
    $(this).toggleClass("altbtn");
    $(".ordermenu").toggleClass("altmenu");
    var btnheight = $(this).outerHeight(),
      btnofst = $(".menubtn").offset().top,
      fulofst = btnheight + btnofst;
    $(".order .ordermenu").offset({ top: fulofst });
  });

  if ($(window).width() <= 370) {
    var day = $(".rotor-group:first-child").outerWidth(),
      hour = $(".rotor-group").eq(1).outerWidth(),
      minute = $(".rotor-group").eq(2).outerWidth(),
      second = $(".rotor-group").eq(3).outerWidth(),
      x = day + hour;
    $(".event .flipdown").width(x);
  }
  $(window).on("resize", function () {
    if ($(window).width() <= 370) {
      var day = $(".rotor-group:first-child").outerWidth(),
        hour = $(".rotor-group").eq(1).outerWidth(),
        minute = $(".rotor-group").eq(2).outerWidth(),
        second = $(".rotor-group").eq(3).outerWidth(),
        x = day + hour;
      $(".event .flipdown").width(x);
    } else {
      $(".event .flipdown").css("width", "auto");
    }
  });
  $("h2.reshead").fitText(1.2, {
    maxFontSize: "64px",
    minFontSize: "21px",
  });
  $("h4.reshead").fitText(1.7, {
    maxFontSize: "42px",
    minFontSize: "18px",
  });
  $(".story .hed").fitText(0.5, {
    maxFontSize: "77px",
    minFontSize: "30px",
  });
  $(".special .hed").fitText(0.8, {
    maxFontSize: "53px",
  });
  $(".res h2").fitText(0.7, { maxFontSize: "40px", minFontSize: "35px" });
  $(".offer .hed").fitText(0.8, { maxFontSize: "40px", minFontSize: "35px" });
  $(".founder .hed").fitText(0.6, { maxFontSize: "60px", minFontSize: "22px" });
  $(".order .speched").fitText(1.1, {
    maxFontSize: "40px",
    minFontSize: "30px",
  });

  $(".offrinfo").on("click", function () {
    $(this).parent().toggleClass("activee");
  });
  $(".chefs .chefbox").width($(".chefs .img").width());
  $(".chefs .chefbox").height($(".chefs .img").height());
  $(window).on("resize", function () {
    $(".chefs .chefbox").width($(".chefs .img").width());
    $(".chefs .chefbox").height($(".chefs .img").height());
  });
  $(".clk").on("click", function () {
    $(".flipping").toggleClass("flipme");
  });

  var e = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (e == 0 && $(window).scrollTop() > oTop) {
      $(".why .counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      e = 1;
    }
  });

  var a = 0;
  $(window).scroll(function () {
    var oTop = $("#count").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".count .counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      a = 1;
    }
  });

  $(".navilink").on("click", function () {
    var target = $(this).attr("data-target"),
      targett = $(target).offset().top;
    console.log(targett);
    $("html,body").animate({ scrollTop: targett }, 1500);
  });

  $("#scroll").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 1500);
  });
  $("#scroll").fadeOut();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 620) {
      $("#scroll").fadeIn(800);
    } else {
      $("#scroll").fadeOut(800);
    }
  });

  $(".flabel").click(function () {
    var sum = parseInt(0);
    $(this).toggleClass("active");
    $(".flabel.active").each(function () {
      var price = parseInt($(this).attr("data-price"));
      sum += price;
    });
    $(".orderprice").text(sum + "$");
  });
}); //end main
