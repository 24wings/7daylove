$(function() {
    //鼠标移到.tab-jquery>ul>li执行函数
    $(".tab-jquery>ul>li").hover(function() {
            //获取当前鼠标移到.tab-jquery>ul>li的索引下标为 i
            var i = $(this).index();
            //鼠标移到当前元素 加上ion 其余同级移除 ion 
            $(this).addClass("ion").siblings().removeClass("ion");
            //.tab-jquery-box的索引下标为 i 的出现，同级的 .tab-jquery-box 隐藏
            $(".tab-jquery-box").eq(i).show().siblings(".tab-jquery-box").hide();
        },
        //鼠标挪开函数(可为空)
        function() {});
});