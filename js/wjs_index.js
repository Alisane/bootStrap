$(function(){
    //控制移动端与pc端轮播图片的加载与手动轮播
    var items = $(".carousel-inner .item");
    $(window).on("resize",function () {
        var width=$(window).width();
        if(width >= 768){
         $(items).each(function (index,value) {
             var item = $(this);
             var imgSrc = item.data("largeImage");
             console.log(imgSrc);
             item.html($('<a class="pcImage" href="javascript:;"></a>').css("backgroundImage","url('"+imgSrc+"')"));//background前的空格是坑
         });
        } else {
            $(items).each(function (index,value) {
            var item = $(this);
            var imgSrc = item.data("smallImage");
            console.log(imgSrc);
            item.html($('<a class="mobileImage" href="javascript:;" > <img src="'+imgSrc+'" alt="..."></a>'));
        });
        }
    }).trigger("resize");
    var startX,endX;
    var carousel_inner = $(".carousel-inner")[0];
    var carousel = $(".carousel");
    carousel_inner.addEventListener("touchstart",function (e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function (e) {
         endX = e.changedTouches[0].clientX;//changedTouches中的d
        if(endX-startX>0){
            carousel.carousel("prev");
        }
        else if(endX-startX<0){
            carousel.carousel("next");
        }
    });
    $('[data-toggle="tooltip"]').tooltip();/*初始化提示工具*/
    //计算导航项的原始宽度（产品块的移动端导航条的滑动）
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totalWidth = 0;//总宽度
    lis.each(function (index,value) {
        totalWidth = totalWidth+$(value).innerWidth();
        console.log($(value).innerWidth());
        //获取宽度的方法的说明：
        /*
        width():只能得到当前元素的内容的宽度
        innerWidth():能得到当前元素的内容的宽度+padding
        outWidth():能得到当前元素的内容的宽度+padding+border
        outWidth(true):能得到当前元素的内容的宽度+padding+border+margin
        */
    });
    ul.width(totalWidth);
    var myScroll = new IScroll(".tabs_parent",{
       scrollX:true,
        scrollY:false
    });
});