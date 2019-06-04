$(function () {
    $(".nav li").hover(function () {
        $(this).siblings('li').removeClass('active'); // 删除其兄弟元素的样式
        $(this).addClass('active'); // 为点击元素添加类名
    });
    $(".nav li").mouseleave(function () {
        $(this).removeClass('active'); // 删除其兄弟元素的样式
        // $(this).addClass('active'); // 为点击元素添加类名
        // $(.nav li:first-child).addClass("active");
    });
});