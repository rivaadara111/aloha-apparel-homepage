// BX SLIDER
$(function() {
  $('.bxslider').bxSlider({
    speed: 500,
    controls: false,
    auto: true,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 0
  });
});

//FORM POP UP function
$(function() {
  $(document).ready(function() {
    $('.subscribe > input:submit').click(function(event) {

      var email = $('#email').val();

      event.preventDefault();

      if ($(email) == '') {
        alert('Please enter a valid email address.');
      } else if (validateEmail(email) === re) {
        alert('Thanks for subscribing!');
      } else {
        alert('Something has gone wrong. Please try again later.');
      }
    });

  });
// Function that validates email address through a regular expression.

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

  //SMOOTH SCROLLING http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery

  $(function() {

    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function() {
        window.location.hash = target;
      });
    });

  });

  //doc ready closing brackets
});
