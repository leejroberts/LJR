document.addEventListener("turbolinks:load", function() {
  var $titleDiv = $('.title-div');
  var $header = $('#header-name');
  var $rChev = $('#right-chevron');
  var $tGrad = $('#t-gradient');
  var $lChev = $('#left-chevron');
  var $tail = $('.hidden-tail');
  var mobileCheck = $('#is-mobile').css('display');  // 'none' === mobile
  var currentMargin = Number($titleDiv.css('margin-left').slice(0,-2));

  function tailWidth(){
    var length = $tail.html().length;
    if (mobileCheck === "none"){
      if (length == 3){
        return 250;
      } else if ( length == 4 ){
        return 320;
      } else if ( length == 5 ){
        return 380;
      } else if ( length == 6 ){
        return 400;
      }
    } else {
      if (length == 3){
        return 150;
      } else if ( length == 4 ){
        return 175;
      } else if ( length == 5 ){
        return 220;
      } else if ( length == 6 ){
        return 240;
      }
    }
  }
  
  // function tailWidthMobile(){
  //   var length = $tail.html().length;
  // }
  
  setTimeout(function(){
    // console.log( currentMargin );
    // console.log( tailWidth() );
    // console.log( currentMargin - (tailWidth()/2 ) );
    $titleDiv.animate({ 'margin-left': currentMargin - (tailWidth()/2) }, 500);
    $rChev.addClass('shift-right');
    $lChev.addClass('shift-left');
    $header.addClass('header-shift');
    $tail.addClass('opaque').css('width', tailWidth() );
    $tGrad.removeClass('hidden');
    $('a').on('click', function(){
      $rChev.removeClass('shift-right');
      $lChev.removeClass('shift-left');
      $header.removeClass('header-shift');
      $tail.addClass('hidden').css('width', 0);
      $('a').off('click')
    });
  }, 500);
  

});