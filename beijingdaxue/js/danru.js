$(function(){
$(".header_nav ul").on('mouseover','li',function(){
var i=$(this).index();
$(".yincang").eq(i).fadeIn().parent().siblings().children(".yincang").fadeOut();
})
$(".header_nav ul").on('mouseleave','li',function(){
var i=$(this).index();
$(".yincang").eq(i).fadeOut(1000)
})
})