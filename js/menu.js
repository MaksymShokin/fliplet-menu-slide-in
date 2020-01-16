Fliplet.Widget.instance('slide-in', function (data) {

var menuInstanceId = data.id;

if (menuInstanceId) {
  init();
}

function init() {
  var lastScrollTop = 0;

  if ($('li.with-icon').length) {
    $('.main-menu').addClass('with-icons');
  }

  if (Modernizr.backdropfilter) {
    $('.body').addClass('backdropfilter');
  }

  if (data.hide) {
    $(window).scroll(function(){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
        // downscroll code
        $('body').addClass('fl-top-menu-hidden');
      } else {
        // upscroll code
        $('body').removeClass('fl-top-menu-hidden');
      }
      lastScrollTop = st;
    });
  }

  $('.fl-menu-overlay').click(function() {
    $(this).closest('.fl-menu').removeClass('active');
    $('.fl-viewport-header .hamburger').removeClass('is-active');
    $('body').removeClass('has-slide-menu');
  });

  $('.fl-menu .fl-close-menu').on('click', function() {
    $(this).parents('.fl-menu').removeClass('active');
    $('body').removeClass('has-slide-menu');
  });

  $('[open-about-overlay]').on('click', function() {
    Fliplet.Navigate.to({
      action: 'about-overlay'
    });
  });

  $('[data-fl-toggle-menu]').click(function (event) {
    event.preventDefault();
    $('.fl-viewport-header .hamburger').toggleClass('is-active');
    $('body').toggleClass('has-slide-menu');
  });
}
});
