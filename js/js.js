// $(document).ready(function(){
// //延迟加载图片
// 	$("img.lazy").lazyload({
// 		placeholder : "images/loading.gif",
// 		effect : "fadeIn",
// 		event: 'mouseover click',
// 		threshold : 200,
//       failurelimit : 10
// 	});
// 	//Ftop(0);
// 	//var search=document.querySelector('.search');
// 	// search.onmouseover=function(){
// 	// 	addClass(this,'on');
// 	// };
// 	// search.onmouseout=function(){
// 	// 	removeClass(this,'on');
// 	// };
// var $li=$('.nav>ul>li'),
// 	$find=$('.nav_down');
// 	$li.on('mouseenter',function(){
// 		if($(this).find($find).is(':hidden')){
// 			$(this).addClass('on').find($find).stop(false,true).fadeIn();
// 		}
// 	});
// 	$li.on('mouseleave',function(){
// 		$(this).removeClass('on').find($find).hide();
// 	});

// 	var search=document.querySelectorAll('.telphone');
// 	for(var i=0;i<search.length;i++){
// 		search[i].onmouseover=function(){
// 			var kk=this.getAttribute("data-hover")
// 			this.innerHTML=kk;
// 		};
// 		search[i].onmouseout=function(){
// 			var kk=this.getAttribute("data-sd")
// 			this.innerHTML=kk
// 		};
// 	}
// });
// //返回顶部
// var timer,isTop = true;
// $(".back_top").click(
//   function () {
//     var that = this;
//     timer = setInterval(function () {
//       var document_S = document.documentElement.scrollTop || document.body.scrollTop;
//       var ispeed = Math.floor(-document_S / 6);
//       document.documentElement.scrollTop = document.body.scrollTop = document_S + ispeed;
//       if (document_S == 0) {
//         clearInterval(timer);
//       }
//       isTop = true;
//     }, 30)
//   })
// window.onscroll = function(){
// 	var t = document.documentElement.scrollTop || document.body.scrollTop;
// 	Ftop(t);
// 	if (!isTop) {
// 		clearInterval(timer);
//     };
//     isTop = false;
// }
// function Ftop(s){
// 	var that=document.querySelector('.back_top'),document_H=window.innerHeight;
// 	if(s>document_H){
// 		that.style.display='block';
// 	}else{
// 		that.style.display='none';
// 	}
// }
// //添加class
// function addClass(element,value){
// 	var oldClassName = element.className;
// 	var arr = oldClassName.split(' ');
// 	if(arr.length){
// 		for(var k=0;k<arr.length;k++){
// 			if(arr[k]!=value && k==arr.length-1){
// 				var newClassName = element.className;
// 		        newClassName += " ";
// 		        newClassName += value;
// 		        element.className = newClassName;
// 			}
// 		}
// 	}else{
//         element.className = value;
// 	}
// }
// //删除class
// function removeClass(element,value){
//     var oldClassName = element.className;
// 	var arr = oldClassName.split(' ');
// 	if(arr.length){
// 		for(var k=0;k<arr.length;k++){
// 			if(arr[k]==value){
// 				var newClassName = oldClassName.replace(' '+value,"");
//     			element.className = newClassName;
// 			}
// 		}
// 	}
// }
//楼层滚动
// function $side(el1,el2,zt,_top){
//     var canGo = true;
//     var al= $(el1);//选项li
//     var main = $(el2);//对应层级雷鸣
//     var on=zt;
//     var abc=main.length;
//     var i=0;
//     var cba=al.length;
//     main.each(function(index){
//         if ($(window).scrollTop()>=$(this).offset().top){
//             al.removeClass(on);
//             al.eq(index).addClass(on);
//         }
//     });
//     al.each(function(index){
//         $(this).click(function(){
//             canGo = false;
//             al.removeClass(on);
//             $(this).addClass(on);
//             $("html,body").stop(true, true).animate({
//                 "scrollTop": main.eq(index).offset().top-_top
//             }, 500,function(){
//                 canGo=true;
// 	            i=index;
//             });
//         });
//     });
//     $(window).scroll(function() {
//         if(canGo){
//             for(var index=abc-1;index>=0;index--){
//                 if ($(window).scrollTop()>=main.eq(index).offset().top-_top-1) {
//                     if(al.eq(index).hasClass(on))
//                     {
//                     }
//                     else{
//                         al.removeClass(on);
//                         al.eq(index).addClass(on);
//                     }
//                     i=index;
//                     break;
//                 }
//             }
//         }
//     });
// }
$(document).ready(function(){
$(window).scroll(function () {
	//小屏幕下的导航条折叠
	if ($(window).width() < 768) {
		// $(".navbar-toggle").click(function(){
		// 	$("#navbar").toggle(500);
		// })
	  //点击导航链接之后，把导航选项折叠起来
	  $("#navbar a").click(function () {
		$("#navbar").collapse('hide');
	// 	$("#navbar").hide(500);
	  });
	  //滚动屏幕时，把导航选项折叠起来
	  $(window).scroll(function () {
	   $("#navbar").collapse('hide');
		// $("#navbar").hide(500);
	 });
   }
 });
});
////动画加载
//function showmod() {
//  function setshow(obj) {
//      var t=$(window).scrollTop();
//      if(t<obj.attr('data-tops')&&t>obj.attr('data-topb')){
//          return true;
//      }else{
//          return false;
//      }
//  }
//  var win=$(window);
//  var el=$('.Animation');
//  el.each(function () {
//      var that=$(this);
//      var time=$(this).attr('data-time') && 200;
//      that.attr('data-topb',that.offset().top-win.height()-that.outerHeight()*.2);
//      that.attr('data-tops',that.offset().top+that.outerHeight());
//      if(setshow(that)){
//      	setTimeout(function(){
//				 that.addClass('on');
//      	},time)
//      }
//  });
//  if(el){
//      var yesno=true;
//      win.scroll(function () {
//          if(yesno){
//              yesno=false;
//              setTimeout(function () {
//                  el.each(function () {
//                      var that=$(this);
//                      var time=$(this).attr('data-time') && 200;
//                      if(!that.hasClass('on')&&setshow(that)){
//                          setTimeout(function(){
//								that.addClass('on');
//
//			            	},time)
//                      }
//                  });
//                  if($('.Animation.on').length==el.length){
//                      yesno=false;
//                  }else{
//                      yesno=true;
//                  }
//              },100);
//          }
//      })
//  }
//}
