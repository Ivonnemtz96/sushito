!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e(".preloader").addClass("animate"),
      setTimeout(() => {
        e(".preloader").fadeOut();
      }, 1e3);
  }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    e(".mobile-menu-active").vsmobilemenu({
      menuContainer: ".vs-mobile-menu",
      expandScreenWidth: 992,
      menuToggleBtn: ".vs-menu-toggle",
    });
  var t,
    a,
    o,
    s,
    i,
    n,
    l = "",
    r = ".scrollToTop";
  function c() {
    let t = e(".main-menu > .menu-item-has-children > ul"),
      a = e(".main-menu .menu-item-has-children > ul > ul");
    t.each(function () {
      e(window).width() > 991 &&
        (e(this).offset().left + e(this).width() > e(window).width()
          ? e(this).css({ left: "auto", right: "100%" })
          : e(this).css({ left: "0", right: "auto" }));
    }),
      a.each(function () {
        e(window).width() > 991 &&
          e(this).offset().left + e(this).width() > e(window).width() &&
          (e(this).css({ left: "auto", right: "100%" }),
          e(this).find(".sub-menu").css({ left: "auto", right: "100%" }));
      });
  }
  (e(window).on("scroll", function () {
    var t, a, o;
    (t = e(".sticky-header")),
      (a = "active"),
      (o = e(window).scrollTop()),
      e(window).scrollTop() > 600
        ? o > l
          ? t.removeClass(a)
          : t.addClass(a)
        : t.removeClass(a),
      (l = o),
      e(this).scrollTop() > 400
        ? e(r).addClass("show")
        : e(r).removeClass("show");
  }),
  e(r).on("click", function (t) {
    return (
      t.preventDefault(), e("html, body").animate({ scrollTop: 0 }, 3e3), !1
    );
  }),
  e(".background-image").length > 0 &&
    e(".background-image").each(function () {
      var t = e(this).attr("data-vs-img");
      e(this).css({ "background-image": "url(" + t + ")" });
    }),
  (t = ".sidemenu-wrapper"),
  (a = ".sideMenuCls"),
  (o = "show"),
  e(".sideMenuToggler").on("click", function (a) {
    a.preventDefault(), e(t).addClass(o), e("body").addClass("overflow-hidden");
  }),
  e(t).on("click", function (a) {
    a.stopPropagation(),
      e(t).removeClass(o),
      e("body").removeClass("overflow-hidden");
  }),
  e(t + " > div").on("click", function (a) {
    a.stopPropagation(),
      e(t).addClass(o),
      e("body").addClass("overflow-hidden");
  }),
  e(a).on("click", function (a) {
    a.preventDefault(),
      a.stopPropagation(),
      e(t).removeClass(o),
      e("body").removeClass("overflow-hidden");
  }),
  (function (t, a, o, s) {
    e(a).on("click", function (a) {
      a.preventDefault(),
        e(t).addClass(s),
        e("body").addClass("overflow-hidden");
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(),
          e(t).removeClass(s),
          e("body").removeClass("overflow-hidden");
      }),
      e(t)
        .find("form")
        .on("click", function (a) {
          a.stopPropagation(),
            e(t).addClass(s),
            e("body").addClass("overflow-hidden");
        }),
      e(o).on("click", function (a) {
        a.preventDefault(),
          a.stopPropagation(),
          e(t).removeClass(s),
          e("body").removeClass("overflow-hidden");
      });
  })(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"),
  e(".counter").counterUp({ delay: 10, time: 1e3 }),
  e(".vs-hero-carousel").each(function () {
    var t = e(this),
      a = t.data("container"),
      o = t.data("responsiveunder"),
      s = t.data("height"),
      i = t.data("loop"),
      n = t.data("navbuttons"),
      l = t.data("navstartstop"),
      r = t.data("hoverbottomnav"),
      c = t.data("hoverprevnext"),
      d = t.data("navprevnext"),
      f = t.data("pauseonhover"),
      p = t.data("autostart"),
      h = t.data("thumbnailnavigation"),
      u = t.data("slidertype"),
      m = t.data("maxratio"),
      g = t.data("showcircletimer");
    t.on("sliderWillLoad", function (t, a) {
      var o,
        s = e(this).find(".ls-responsive"),
        i = e(window).width();
      (o = i <= 767 ? "ls-mobile" : i <= 1024 ? "ls-tablet" : "ls-desktop"),
        s.each(function () {
          var t = e(this),
            a = t.data(o) ? t.data(o) : t.data("ls-desktop"),
            s = void 0 !== t.attr("style") ? t.attr("style") : " ";
          t.attr("style", s + a);
        });
    }),
      t.layerSlider({
        maxRatio: m || 1,
        type: u || "responsive",
        pauseOnHover: !!f,
        navPrevNext: !!d,
        hoverPrevNext: !!c,
        hoverBottomNav: !!r,
        navStartStop: !!l,
        navButtons: !!n,
        loop: !i,
        autostart: !!p,
        height: s || 1080,
        responsiveUnder: o || 1220,
        layersContainer: a || 1220,
        showCircleTimer: !!g,
        skinsPath: "layerslider/skins/",
        thumbnailNavigation: !h,
      });
  }),
  e("select").length > 0 && e("select").niceSelect(),
  e(".dateTime-pick").datetimepicker({
    timepicker: !0,
    datepicker: !0,
    format: "y-m-d H:i",
    hours12: !1,
    step: 30,
  }),
  e(".date-pick").datetimepicker({
    timepicker: !1,
    datepicker: !0,
    format: "m-d-y",
    step: 10,
  }),
  e(".time-pick").datetimepicker({
    datepicker: !1,
    timepicker: !0,
    format: "H:i",
    hours12: !1,
    step: 10,
  }),
  e(".popup-image").magnificPopup({ type: "image", gallery: { enabled: !0 } }),
  e(".popup-video").magnificPopup({ type: "iframe" }),
  e("#aptSubmit1").on("click", (t) => {
    t.preventDefault();
    let a = e("#aptDay").val(),
      o = e("#aptGuests").val();
    e("#aptMainGuest").val(o), e("#aptMainDate").val(a);
  }),
  e(".bar-progress .progress-value").each(function () {
    var t = e(this).attr("data-value");
    e(this).css("width", t + "%");
  }),
  c(),
  e(window).on("resize", function () {
    c();
  }),
  e("#buyerShipAnother").on("change", function () {
    e(this).is(":checked")
      ? e(".vs-billing-differentAddress").slideDown()
      : e(".vs-billing-differentAddress").slideUp();
  }),
  e(".quantity-plus").each(function () {
    e(this).on("click", function () {
      var t = e(this).siblings(".qty-input"),
        a = parseInt(t.val());
      isNaN(a) || t.val(a + 1);
    });
  }),
  e(".quantity-minus").each(function () {
    e(this).on("click", function () {
      var t = e(this).siblings(".qty-input"),
        a = parseInt(t.val());
      !isNaN(a) && a > 1 && t.val(a - 1);
    });
  }),
  e(".vs-rating-input").length > 0 &&
    e(".vs-rating-input").each(function () {
      e(this)
        .find("span")
        .on("click", function () {
          e(".vs-rating-input span").addClass("active"),
            e(this).nextAll("span").removeClass("active");
        });
    }),
  e((s = ".onepage-nav")).length > 0 &&
    e(s).each(function () {
      e(this)
        .find("a")
        .each(function () {
          e(this).on("click", function () {
            var t = e(this.getAttribute("href"));
            t.length &&
              (event.preventDefault(),
              e("html, body")
                .stop()
                .animate({ scrollTop: t.offset().top - 10 }, 1e3));
          });
        });
    }),
  e('a[data-toggle="tab"]').on("shown.bs.tab", function (t) {
    var a = e(this).attr("href");
    e(a).find(".vs-carousel").slick("refresh");
  }),
  e(".vs-toggler").each(function () {
    var t = e(this);
    t.on("click", function (a) {
      a.preventDefault();
      var o = e(this).next(".toggle-menu");
      o.hasClass("show")
        ? (t.removeClass("active"), o.removeClass("show"))
        : (e(".toggle-menu.show").removeClass("show"),
          e(".vs-toggler.active").removeClass("active"),
          t.addClass("active"),
          o.addClass("show"));
    });
  }),
  e(".vs-setting-plate").length) &&
    (e(".vs-setting-plate .color-btn").each(function () {
      (n = e(this).attr("data-color")),
        e(this).css({ "background-color": n }),
        e(this).on("click", function () {
          (i = e(this).data("url")), e("#themeColor").attr("href", i);
        });
    }),
    e(".plateToggle").on("click", function (t) {
      return t.preventDefault(), e(".vs-setting-plate").toggleClass("open"), !1;
    }));
  0 != e("#google-map").length &&
    google.maps.event.addDomListener(window, "load", function () {
      var e = {
          zoom: 11,
          scrollwheel: !1,
          center: new google.maps.LatLng(40.67, -73.94),
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }, { lightness: 17 }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                { color: "#ffffff" },
                { lightness: 29 },
                { weight: 0.2 },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }, { lightness: 18 }],
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }, { lightness: 16 }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#dedede" }, { lightness: 21 }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                { visibility: "on" },
                { color: "#ffffff" },
                { lightness: 16 },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                { saturation: 36 },
                { color: "#333333" },
                { lightness: 40 },
              ],
            },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [{ color: "#fefefe" }, { lightness: 20 }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                { color: "#fefefe" },
                { lightness: 17 },
                { weight: 1.2 },
              ],
            },
          ],
        },
        t = document.getElementById("google-map"),
        a = new google.maps.Map(t, e);
      new google.maps.Marker({
        position: new google.maps.LatLng(40.67, -73.94),
        map: a,
        title: "Cryptox",
      });
    });
})(jQuery);
