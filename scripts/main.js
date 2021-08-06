$(document).ready(function () {
  // табы
  var tabsItem = $(".heading__tabs-item");
  var contentItem = $(".content__item");
  var mobileButton = $(".mobile-button");
  var mobileMenu = $(".mobile-menu");
  var bookmarkButton = $(".news-item__bookmark");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("heading__tabs-item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("heading__tabs-item--active");
  });

  mobileButton.on("click", function () {
    mobileMenu.toggleClass("mobile-menu--active");
    mobileButton.toggleClass("mobile-button--active");
  });

  bookmarkButton.on("click", function (event) {
    $(this).toggleClass("news-item__bookmark--active");
  });

  var toTop = $(".to-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      toTop.addClass("to-top--visible");
    } else {
      toTop.removeClass("to-top--visible");
    }
  });
  $(".to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 400);
  });

  $("#navbar").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 500);
  });

  const swiper = new Swiper(".career-swiper", {
    loop: true,

    pagination: {
      el: ".choice__pagination",
      clickable: true,
    },

    autoplay: {
      delay: 3000,
    },
  });
});
