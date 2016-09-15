$(document).ready(function() {

animClick('#trigg', '.col-md-4', 'zoomInDown');

function animClick(trigger, element, animation){
  trigger = $(trigger);
  element = $(element);
  trigger.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};



});
