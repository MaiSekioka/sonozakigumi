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

// ヘッダー追従

function fixedHeader(){
  let height = $('#top').outerHeight();
  let scroll = $(this).scrollTop();
  if(height < scroll){
    $('.header').addClass('js-fixed');
  } else {
    $('.header').removeClass('js-fixed');
  };
};

$(window).on('scroll', function(){
  fixedHeader();
});

$(window).on('load', function(){
  fixedHeader();
});
