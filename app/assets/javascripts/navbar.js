$(function(){
  
  var $navSandwich = $('#sandwich');
  $navSandwich.click(function(){
    $navSandwich.toggleClass('toggle-x');
    $('#nav-mobile').toggleClass('show-ease');
  });

  
})