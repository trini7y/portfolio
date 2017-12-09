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

function initMap() {
        var uluru = {lat: 6.5243793, lng: 3.379205700000057};
        var map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}
