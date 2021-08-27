$(function(){

// 상단 네비게이션 스크롤이동 설정
var menuItem = $('#gnb li a, #navi h1 a');

menuItem.click(function(e){
  var el = $(this).attr('href');  // #about
  // console.log(el);  
  var elWrap = $(el); 
  // console.log(elWrap);               

  scrollMove(elWrap, 63);

  e.preventDefault();
});

// 부드러운 이동 함수만들기
function scrollMove(el, navHeight){
  var offset = el.offset().top;
  var totalScroll = offset - navHeight;

  $('html, body').animate({scrollTop: totalScroll}, 800);
}

  
});//제이쿼리 끝