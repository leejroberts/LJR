document.addEventListener("turbolinks:load", function() {
  
  var $header = $('#header-name');
  // var $headerString = $header.html();
  setTimeout(function(){
    $('.right-chevron').addClass('shift-right');
    $('.left-chevron').addClass('shift-left');
    $header.addClass('header-shift');
    $('#hidden-tail').fadeIn('slow');
  }, 500); 

});