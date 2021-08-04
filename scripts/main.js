$(document).ready(function () {
  // табы
  var tabsItem = $(".heading__tabs-item");
  var contentItem = $(".content__item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("heading__tabs-item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("heading__tabs-item--active");
  });
});
