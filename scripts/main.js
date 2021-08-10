$(document).ready(function () {
  // табы
  let tabsItem = $(".heading__tabs-item");
  let contentItem = $(".content__item");
  let mobileButton = $(".mobile-button");
  let mobileMenu = $(".mobile-menu");
  let bookmarkButton = $(".news-item__bookmark");
  let bigBookmarkButton = $(".main-news__bookmark");

  tabsItem.on("click", function (event) {
    let activeContent = $(this).attr("data-target");
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
  bigBookmarkButton.on("click", function () {
    $(this).toggleClass("main-news__bookmark--active");
  });

  let toTop = $(".to-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      toTop.addClass("to-top--visible");
    } else {
      toTop.removeClass("to-top--visible");
    }
  });
  $(".to-top").click(function (event) {
    event.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 400);
  });

  $("#navbar").on("click", "a", function () {
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 500);
  });
  $(".comments__add").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 500);
  });
  $("#mobile-menu").on("click", "a", function () {
    mobileMenu.removeClass("mobile-menu--active");
    mobileButton.removeClass("mobile-button--active");
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 500);
  });

  let modalButton = $("[data-toggle=modal]"),
    closeButton = $("[data-close=modal]");
  modalButton.on("click", function (event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  });
  closeButton.on("click", function (event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay"),
      modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalOverlay.addClass("modal__overlay--hidden");
    modalDialog.removeClass("modal__dialog--visible");
    modalDialog.addClass("modal__dialog--hidden");
  });

  $(document).keyup(function (event) {
    if ("Escape" === event.key || 27 === a.keyCode) {
      event.preventDefault();
      let modalOverlay = $(".modal__overlay"),
        modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalOverlay.addClass("modal__overlay--hidden");
      modalDialog.removeClass("modal__dialog--visible");
      modalDialog.addClass("modal__dialog--hidden");
    }
  });

  let checkboxLabel = $("#modal-checkbox__label");
  checkboxLabel.on("click", function () {
    checkboxLabel.toggleClass("modal-checkbox__label--active");
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

  const swiperArticle = new Swiper(".hero-article__swiper", {
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: ".hero-article__slide-button--next",
      prevEl: ".hero-article__slide-button--prev",
    },
  });

  $(function () {
    $(".comments__item").slice(0, 4).show();
    $("#loadMore").on("click", function (e) {
      e.preventDefault();
      $(".comments__item:hidden").slice(0, 4).slideDown();
      if ($(".comments__item:hidden").length == 0) {
        $("#loadMore").attr("disabled", true);
      }
    });
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",

      messages: {
        name: {
          minlength: "Имя должно состоять минимум из 2 букв",
          required: "Введите своё имя, пожалуйста",
        },
        email: {
          required: "Введите свою электронную почту",
          email: "Формат записи: 'имя@домен.com'",
        },
        phone: {
          minlength: "Введите свой номер целиком",
          required: "Введите, пожалуйста, свой номер телефона",
        },
        message: {
          required: "Введите ваше сообщение, пожалуйста",
        },
        checkbox: {
          required: "Поставьте галочку, пожалуйста",
        },
        theme: {
          required: "Выберите тему из предложенных!",
        },
        comment: {
          required: "Заполните поле комментария",
          minlength: "Необходимо ввести минимум 100 символов",
        },
      },
    });
  });
});
