$(function () {
   // 顶部导航栏
   $(".top-nav>ul>li").hover(function () {
      $(this).find(".xc").css('border','1px solid #ccc').show().siblings("a").css({ 'background': '#fff' });
      // $('.xc').css('border','1px solid #000');
   }, function () {
      $(this).find(".xc").hide().siblings("a").css('background', '');
   })
   $('.sousuo .fenlei').hover(function () {
      $('.sousuo .fenlei .fl-hide').show();
   }, function () {
      $('.sousuo .fenlei .fl-hide').hide();
   })
   //   宝贝大图--放大镜
   var i = 0;
   var spw = $('.baobei .bb-zuo .small-pic span').width();
   var osm = $('.baobei .bb-zuo .small-pic').width();
   // 小图片
   $('.baobei .bb-zuo .wufeng .wufeng1 ul li').hover(function () {
      i = $(this).index();
      $(this).css('border', '2px solid red').siblings().css('border', '2px solid #fff');
      $('.baobei .bb-zuo .small-pic>ul>li').eq(i).show().siblings().hide();
   })
   //  大图片
   $('.baobei .bb-zuo .small-pic').hover(function () {
      $('.baobei .bb-zuo .big-pic').toggle();
      $('.baobei .bb-zuo .small-pic span').toggle();
      $('.baobei .bb-zuo .big-pic>ul>li').eq(i).show().siblings().hide();
   })
   $('.baobei .bb-zuo .small-pic').mousemove(function (e) {
      var ox = $('.baobei .bb-zuo .small-pic').offset().left;
      var oy = $('.baobei .bb-zuo .small-pic').offset().top;
      var ex = e.pageX;
      var ey = e.pageY;
      var sx = ex - ox;
      var sy = ey - oy;
      if (sx < spw / 2) {
         sx = spw / 2;
      }
      if (sy < spw / 2) {
         sy = spw / 2;
      }
      if (sx > osm - spw / 2) {
         sx = osm - spw / 2;
      }
      if (sy > osm - spw / 2) {
         sy = osm - spw / 2;
      }
      $('.baobei .bb-zuo .small-pic span').css({
         left: sx - spw / 2,
         top: sy - spw / 2
      })
      $('.baobei .bb-zuo .big-pic>ul>li').css({
         left: -osm / spw * (sx - spw / 2),
         top: -osm / spw * (sy - spw / 2)
      })
   })


   //  宝贝按钮
   $('.baobei .bb-zuo .wufeng .wfbth-left').click(function () {
      var m = $('.baobei .bb-zuo .wufeng1 ul').css('margin', '0')
      if (m = 310) {
         $('.baobei .bb-zuo .wufeng1 ul').css('margin-left', '0');
      }
   })
   $('.baobei .bb-zuo .wufeng .wfbth-right').click(function () {
      $('.baobei .bb-zuo .wufeng1 ul').css('margin-left', '-310px');
   })
   //  尺码
   $('.baobei .bb-zhong .chima .chima-right ul li').click(function () {
      $(this).addClass('cm').siblings().removeClass('cm');
   })
   //  颜色
   $('.baobei .bb-zhong .color .color-right ul li').eq(0).css('border', '1px solid red');
   $('.baobei .bb-zhong .color .color-right ul li').click(function () {
      var x = $(this).index();
      $(this).css('border', '1px solid red').siblings().css('border', '1px solid #ccc')
      $('.baobei .bb-zuo .small-pic ul li').eq(x).show().siblings().hide();
      $('.baobei .bb-zuo .wufeng .wufeng1 ul li').eq(x).css('border','2px solid red').siblings().css('border','2px solid #fff');
      $('.baobei .bb-zuo .big-pic>ul>li').eq(x).show().siblings().hide();
   })


   // 定时器
   var intDiff = parseInt(60); //倒计时总秒数量
   function timer(intDiff) {
      window.setInterval(function () {
         var day = 0,
            hour = 0,
            minute = 0,
            second = 0; //时间默认值        
         if (intDiff > 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
         }
         if (minute <= 9) minute = '5' + minute;
         if (second <= 9) second = '0' + second;
         $('#day_show').html(day + "天");
         $('#hour_show').html('<s id="h"></s>' + hour);
         $('#minute_show').html('<s></s>' + minute);
         $('#second_show').html('<s></s>' + second);
         intDiff--;
      }, 1000);
   }
   $(function () {
      timer(intDiff);
   });
  //  选项卡
  let contentTags =$('#content .js-lb ul li');
  let contentList =$('#content .list>div');
  contentTags.click(function(){
    let i = contentTags.index(this);
    contentList.eq(i).show().siblings().hide();
  })

  // 指定导航
    $(window).scroll(function(){
      let height = $('#shop').outerHeight(true);
      let top = $(this).scrollTop();
      if(top > height){
        $('#content .js-lb').addClass('fixed');
      }else{
        $('#content .js-lb').removeClass('fixed');
      }
    })


})