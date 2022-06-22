$(document).ready(function () {
  function mobileViewUpdate() {
    const viewportWidth = $(window).width();
    const nav = $(".navbar.fixed-top");
    if (viewportWidth < 600) {
      nav.addClass("scrolled");
    } else {
      $(document).scroll(function () {
        nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
      });
    }
  }

  $(window).on("load", mobileViewUpdate);
  $(window).on("resize", mobileViewUpdate);

  mobileViewUpdate();
});
