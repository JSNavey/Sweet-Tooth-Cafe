$('.menu').on('click', function(){
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});

// Remove menu-open class
$('.nav a').on('click', function(){
  $('.menu').removeClass('active');
  $('.overlay').removeClass('menu-open');
});