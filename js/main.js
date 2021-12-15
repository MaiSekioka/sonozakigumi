$(function(){
  
  $('.burger-btn').on('click',function(){
    if($(this).attr('aria-expanded') == 'false'){
      $(this).attr('aria-expanded',true);
      $('#js-global-menu').attr('aria-hidden',false)
      $('.nav-menu-list').css('display','flex');
    } else {
      $(this).attr('aria-expanded',false);
      $('#js-global-menu').attr('aria-hidden',true)
      $('.nav-menu-list').css('display','none');
    }
  });


});