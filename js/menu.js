if (Modernizr.backdropfilter) {
  $('.body').addClass('backdropfilter');
}

$('.fl-menu-overlay').click(function() {
  $(this).closest('.fl-menu').removeClass('active');
});

$('.fl-menu .fl-close-menu').on('click', function() {
  $(this).parents('.fl-menu').removeClass('active');
});
