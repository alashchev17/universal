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
  $(".to-top").click(function (event) {
    event.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 400);
  });

  $("#navbar").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
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
      },
    });
  });
});
