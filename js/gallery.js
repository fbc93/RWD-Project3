$(function(){  

  // g-menu button 클릭 활성화

  $('.g-menu>li').click(function(e){
    var index = $(this).index();
    console.log(index);
    $('.g-menu>li>a').removeClass('gmenuOn');
    $('.g-menu>li>a').eq(index).addClass('gmenuOn');
    e.preventDefault();

  });

  // Isotope plugin - grid클래스의 변수선언
  var  grid = $('.grid');

  // Isotope plugin 초기설정
  grid.isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 0
    }
  });

  // Isotope plugin filter - all / design / website

  $('#all').click(function(e){
    grid.isotope({ filter: '.grid-item' });
    e.preventDefault();
  });

  $('#design').click(function(e){
    grid.isotope({ filter: '.design' });
    e.preventDefault();
  });

  $('#web').click(function(e){
    grid.isotope({ filter: '.web' });
    e.preventDefault();
  });

   // magnificPopup - big image

   $('.pop').magnificPopup({
    type: 'image',
    gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
    }
  });

  // #Portfolio - Image : HOVER
  
  $('.grid-item').hover(function(){
    var index = $(this).index();
    
    $('.caption').eq(index).addClass('grid-hover');
  },function(){
    $('.caption').removeClass('grid-hover');
  }); 


});//제이쿼리 끝