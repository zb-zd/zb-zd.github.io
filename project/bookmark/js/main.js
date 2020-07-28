$(function () {
  // 导航栏
  function over() {
    $('.navbar').css('background', '#fff');
    $('.navbar-header a').css('color', '#000');
    // $('.logo').css('background', 'url(./img/dark.logo.png)');
    $('.navbar-nav li a').css('color', '#000');
    $('.navbar-collapse .get').css('border', '1px solid #000');
  };
  function out() {
    $('.navbar').css('background', 'none');
    $('.navbar-header a').css('color', '#fff');
    // $('.logo').css('background', 'url(./img/white.logo.png)');
    $('.navbar-nav li a').css('color', '#fff');
    $('.navbar-collapse .get').css('border', '1px solid #fff');
  };
  $(window).scroll(function () {
    let top = $(this).scrollTop();
    if (top > 0) {
      over();
    } else {
      out();
    }
  })

  // 右侧变栏
//   $('.navbar-collapse .change').click(function(){
//     var flag=true;
//     if(flag){
//       $('.menu').css({
//         'right':'0px',
//         'transition':'all .3s'
//       })
//       flag=false;
//     }else{
//       $('.menu').css({
//         'right':'-250px',
//         'transition':'all .3s'
//       })
//     }
//   })
})