$(function () { 
 {
  let home_item = $('#home .home-banner .item');
  let x = 0;
  home_item.eq(0).show();
  function carousel() { 
    x++;
    if(x > home_item.length-1){
      x = 0;
    }
    home_item.eq(x).fadeIn().siblings().fadeOut();
   }
   setInterval(carousel,3000);
 }
//  inside
{
  let inside_banner = $('.inside-small')
  let inside_item = $('.inside-small img');
  let inside_item_width = inside_item.width()+30;
  console.log(inside_item_width);
  let i = 2;
  $('#inside .inside-left').click(function () { 
    i++;
    if(i>6){
      i=1;
      inside_banner.css("left",-inside_item_width+"px");
      i++;
    }
    inside_banner.animate({
      left:-i*inside_item_width
    },500)
    
   })
   $('#inside .inside-right').click(function () { 
    i--;
    console.log(i)
    if(i<0){
      i=5;
      inside_banner.css("left",-inside_item_width*5+"px");
      i--;
    }
    inside_banner.animate({
      left:-i*inside_item_width
    },500)
   })
}

 })