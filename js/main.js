 $(function(){

   //#Intro : wow js 시작
   new WOW().init();



   

  //#Navi - Bootstrap : Scroll-spy 구현
  $('body').scrollspy({ target: '#navi', offset: 64 });


  //#Navi - 로드시 Scroll-spy 기본 활성화 끄기 (home: 주황색)
  $(window).load(function(){
    $('#gnb>ul>li').eq(0).removeClass('active');
    $('#gnb>ul>li>a').addClass('gnb-on3');
  });


  //#Navi - 활성화 구현(배경, 폰트컬러)
 $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();

    if(scrollPos > 20){
      $('#navi').addClass('fixed'); // Navi: 흰색

      // 시안 확인용 클래스 : gnb-on1
      $('#gnb>ul>li').eq(0).removeClass('gnb-on1');
      $('#gnb>ul>li').eq(0).addClass('active');

      $('#gnb>ul>li>a').hover(function(){
        $(this).addClass('gnb-on2');
      },function(){
        $(this).removeClass('gnb-on2');
      });

      $('#gnb>ul>li>a').removeClass('gnb-on3');

    }else{
      $('#navi').removeClass('fixed'); // Navi: 투명
    
       // 시안 확인용 클래스 : gnb-on1
       $('#gnb>ul>li').eq(0).addClass('gnb-on1');
       $('#gnb>ul>li').eq(0).removeClass('active');
       $('#gnb>ul>li>a').addClass('gnb-on3');
    }

    //#Navi : 다음영역 전까지 주황색 home 활성화 유지
    if(scrollPos > 700){
      $('#gnb>ul>li').eq(0).removeClass('active');
    }

  });//스크롤 동작 끝





  //#Member - 이미지 : HOVER 
 $('.member').hover(function(){
   var index = $(this).index();
   var num = index+1;

   $('.member img').eq(index).attr('src','../images/lg/member-img'+num+'-on.png');
   $('.sns-group').eq(index).addClass('icon-on');

 }, function(){
   var index = $(this).index();
   var num = index+1;

  $('.member img').eq(index).attr('src','../images/lg/member-img'+num+'-off.png');
  $('.sns-group').removeClass('icon-on');

 });



//#Mobile_Btn 
//- 메뉴에서 마우스 나가면 사라지기 & 버튼 색상 활성화/비활성화
$('#gnb').mouseleave(function(){

  $('#gnb').removeClass('collapse in');
  $('#mobile_btn').addClass('mobile-off');
  $('#gnb').addClass('collapse');

});

$('#gnb').mouseenter(function(){
  $('#mobile_btn').removeClass('mobile-off');
 $('#mobile_btn').addClass('mobile-on');

});



//#Banner : Jarallax JS

$('.jarallax').jarallax({
  speed: 0.2
});

   
 });//제이쿼리 끝