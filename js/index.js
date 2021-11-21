/*
*乐购商城首页.js
*2021.10.26
*/ 
/*当页面加载完毕 */
$(function(){
  /*首页大图轮播 */
   $('#banner').tyslide({
    boxh:460,//盒子的高度
    w:1000,//盒子的宽度
    h:390,//图片的高度
    isShow:true,//是否显示控制器
    isShowBtn:true,//是否显示左右按钮
    controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW:20,//控制按钮宽度
    controlsH:20,//控制按钮高度
    radius:10,//控制按钮圆角度数
    controlsColor:"#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    isShowNum:true //是否显示数字
    /*图书电子书轮播 */
});
$('#ebooks-banner').tyslide({
  boxh:223,//盒子的高度
  w:332,//盒子的宽度
  h:223,//图片的高度
  isShow:true,//是否显示控制器
  isShowBtn:true,//是否显示左右按钮
  controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
  controlsW:20,//控制按钮宽度
  controlsH:2,//控制按钮高度
  controlsColor:"#d7d7d7",//普通控制按钮的颜色
  controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
 /*电子书 table切换*/
 $('.ebooks-nav > li').mouseenter(function(){
   //导航高亮颜色切换
   $(this).addClass('active').siblings('li').removeClass('active');
   //获取索引
   var index=$(this).index();
   //内容切换
   $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide;
 });

 /*新书列表手风琴效果 */
 $('.ebook .right-box ul > li').mouseenter(function(){
   //所有兄弟，详情隐藏，标题显示
   $(this).siblings().find('.desc').hide()
   $(this).siblings().find('.ebooks-title').show();

   //当前，隐藏标题，显示详情
   $(this).find('.ebooks-title').hide();
   $(this).find('.desc').show();

 });
 
/*服装轮播 */
$('#clother-banner').tyslide({
  boxh:334,//盒子的高度
  w:482,//盒子的宽度
  h:334,//图片的高度
  isShow:true,//是否显示控制器
  isShowBtn:true,//是否显示左右按钮
  controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
  controlsW:20,//控制按钮宽度
  controlsH:2,//控制按钮高度
  controlsColor:"#d7d7d7",//普通控制按钮的颜色
  controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
/*服装 table切换*/
$('.clothes .clothes-nav > li').mouseenter(function(){
  //导航高亮颜色切换
  $(this).addClass('active').siblings('li').removeClass('active');
  //获取索引
  var index=$(this).index();
  //内容切换
  $('.rightbox').eq(index).show().siblings('.rightbox').hide;
});
/*户外轮播 */
$('#sport-banner').tyslide({
  boxh:334,//盒子的高度
  w:482,//盒子的宽度
  h:334,//图片的高度
  isShow:true,//是否显示控制器
  isShowBtn:true,//是否显示左右按钮
  controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
  controlsW:20,//控制按钮宽度
  controlsH:2,//控制按钮高度
  controlsColor:"#d7d7d7",//普通控制按钮的颜色
  controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
/*户外 table切换*/
$('.sport .sport-nav > li').mouseenter(function(){
  //导航高亮颜色切换
  $(this).addClass('active').siblings('li').removeClass('active');
  //获取索引
  var index=$(this).index();
  //内容切换
  $('.rightbox').eq(index).show().siblings('.rightbox').hide;
});
/*童装轮播 */
$('#children-clothes-banner').tyslide({
  boxh:334,//盒子的高度
  w:482,//盒子的宽度
  h:334,//图片的高度
  isShow:true,//是否显示控制器
  isShowBtn:true,//是否显示左右按钮
  controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
  controlsW:20,//控制按钮宽度
  controlsH:2,//控制按钮高度
  controlsColor:"#d7d7d7",//普通控制按钮的颜色
  controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
/*童装 table切换*/
$('.children-clothes .children-nav > li').mouseenter(function(){
  //导航高亮颜色切换
  $(this).addClass('active').siblings('li').removeClass('active');
  //获取索引
  var index=$(this).index();
  //内容切换
  $('.rightbox').eq(index).show().siblings('.rightbox').hide;
});

/*推广商品切换 */
$('.promotion .roof ul li').mouseenter(function(){
  //导航激活类的切换
  $(this).addClass('active').siblings().removeClass('active')
 
  //内容切换
  //获取对应索引
  var index = $(this).index();
  console.log(index)
  console.log($('.promotion .main .inner-box'))
  //左右移动
  $('.promotion .main .inner-box').animate({
    'left': -index * 1170
  },300)
})

/*推广商品主图变色
$('.promotion .main .promotion-list li').mouseenter(function(){
  $('.promotion .main .promotion-list li').css("background","#ccc");
})*/


/*返回顶部 */
$(document).scroll(function(){
  //获取距离顶部的位置
  var topDistance = $('html,body').scrollTop();
  //判断
  if( topDistance > 500 ){
      $('.backToTop').fadeIn();
  }else{
      $('.backToTop').fadeOut();
  }
})
//返回顶部
$('.backToTop').click(function(){
  $('html,body').animate({
    scrollTop:0
  },300)
})
})