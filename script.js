$('.menu').on('click', function(){
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});

// Remove menu-open class
$('.')