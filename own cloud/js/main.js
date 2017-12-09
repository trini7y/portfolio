$.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  }


$('#about').click(function (event) {
  event.preventDefault();
  $('#scroll').scrollView();
});
