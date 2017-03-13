document.addEventListener("turbolinks:load", function() {
  // ...
  var $navMobile = $('#nav-mobile');
  var $navSandwich = $('#sandwich');
  
  $('#sandwich').click(function(){
    console.log('click');
    if ($navMobile.css('display') === 'none' ){
      $navSandwich.addClass('toggle-x');
      $navMobile.addClass('show-ease');
    } else {
      $navSandwich.removeClass('toggle-x');
      $navMobile.removeClass('show-ease');
    }
  });
});

// $(function(){
  

  
// })