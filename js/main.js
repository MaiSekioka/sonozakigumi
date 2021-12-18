// バーガーボタン・スライドメニュー
$('.burger-btn').on('click',function(){
  $('body').toggleClass('is-drawerActive');
  if($(this).attr('aria-expanded') == 'false'){
    $(this).attr('aria-expanded',true);
    $('.nav-menu-bg').attr('aria-hidden',false)
    $('.nav-menu-list').css('display','flex');
  } else {
    $(this).attr('aria-expanded',false);
    $('.nav-menu-bg').attr('aria-hidden',true)
    $('.nav-menu-list').css('display','none');
  }
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

// ローディングアニメーション
function loadingAnimation(){
  $('.loading-area').delay(1500).fadeOut('slow');
};

//スムーススクロール
$('a[href^="#"]').click(function(e){
  let speed = 500;
  let href = $(this).attr('href');
  let target = $(href == '#' || href == '' ? 'html' : href);
  let position = target.offset().top - 30;
  $('html').animate({
    scrollTop: position
  },speed,'swing');

  if($('body').hasClass('is-drawerActive')){
    $('body').removeClass('is-drawerActive');
    $('.burger-btn').attr('aria-expanded',false);
    $('.nav-menu-list').css('display','none');
    $('.nav-menu-bg').attr('aria-hidden',true);
  }
  return false;
});


//---------------------------//
// 各種　関数の発火タイミング定義 //
//---------------------------//

// スクロール時のイベントハンドラ
$(window).on('scroll', function(){
  fixedHeader();
});

// 読み込み完了時のイベントハンドラ
$(window).on('load', function(){
  loadingAnimation();
  fixedHeader();
});