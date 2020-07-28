$(function(){
  $(window).scroll(function () {
    let bannerHeight =  $("#banner").height();
    let aboutHeight =  $("#about").outerHeight(true);
    let workHeight =  $("#work").outerHeight(true);
    let worksHeight =  $("#works").outerHeight(true);
    let top = $(this).scrollTop();
    if (top > bannerHeight) {
      $('.navbar').addClass('navbar-fixed-top');
    }else{
      $('.navbar').removeClass('navbar-fixed-top');
    }

    // 技能掌握
    let height=aboutHeight+workHeight+worksHeight+400;
    // alert(height);
    if(top>height){
      // alert(height);
      setTimeout(function() {
        $('#skill .mask .item .item-big .item-f').each(function(i) {
            var $bar = $(this);
            setTimeout(function() {
                $bar.css('width', $bar.attr('data-percent'));
            }, i * 100);
        });
      
      }, 1000)
    }
    
  })


//联系我
var xuanBtn = $('#call .mask .call-list .item .call-content .cot-foot a');
var xuan_list = $('#call .mask .call-list .item .call-content .cot-head img');
// var i = xuanBth.index();
xuanBtn.click(function () { 
  var i = xuanBtn.index(this);
  xuan_list.eq(i).show().siblings().hide();
 })
})






