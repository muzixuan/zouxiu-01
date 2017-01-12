/**
 * Created by Administrator on 2017/1/7.
 */
//图片切换
var t = null;
var _index = 0;
function autoPlay(){
    t = setInterval(function(){
        _index >= $("#img-box>li").size() - 1?_index = 0:_index++;
        $("#img-box").stop().animate({left:-_index * 1200},500)
    },3000)
}
autoPlay();


$(function(){
    $(".nav>li:eq(2)").hover(function(){
        $(".meau").css("display","block");
    },function(){
        $(".meau").css("display","none");
    })

    //图片切换
    $("#img-box").hover(function(){
        clearInterval(t);
    },function(){
        autoPlay();
    });
    //span点的切换
    $("#banner>span:first").click(function(){
        if(_index > 1){
            _index = 0;
        }else{
            $("#img-box").stop().animate({left:_index * 1200})
        }
    });
    //吸顶效果
    $(window).scroll( function() {
        var m =$(document).scrollTop();
        //console.log(m);
        $("#nav>li").css("marginTop","20px");
        $("#nav>li>.morechose").css("background","white");
        if(m>100){
            $("#top").addClass("dd");
            $("#nav").addClass("dd1");
        }else{
            $("#top").removeClass("dd");
            $("#nav").removeClass("dd1")
        }
    });
    //选项卡
    $("#nav>li").hover(function(){

        $("#nav-box").css({
            height:"40px",
            backgroundColor:"whitesmoke"
        })
        $("#nav>li").css({
            width:"40px",
            height:"19px"
        });
        $("#nav>li>.morechose").hide();
        $("#nav>li>.morechose").eq($(this).index()).show();
        $("#nav>li>.morechose").eq($(this).index()).css("z-index","10");

    },function(){
        $("#nav>li>.morechose").css("display","none");
    })

});