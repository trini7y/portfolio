$.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  }


$('.portfolio').click(function (event) {
  event.preventDefault();
  $('#portfolio').scrollView();
});

$.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  }


$('.contact').click(function (event) {
  event.preventDefault();
  $('#contact').scrollView();
});
$.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  }


$('.homehome').click(function (event) {
  event.preventDefault();
  $('#home').scrollView();
});
