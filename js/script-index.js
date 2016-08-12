$(document).ready(function() {
	//菜单栏点击文字背景颜色样式
    $(".top-bar-li").click(function() {
		var $cur_actli = $(".active-li");
		var $cur_acta = $(".active-a");
		$cur_actli.removeClass("active-li");
		$cur_acta.removeClass("active-a");
		$(this).addClass("active-li");
		$(this).children().addClass("active-a");
	});


    //点击滑动大图右边按钮效果    
    $(".right").click(function() {
    	var $cur_slide = $(".first-slide");

    	var $next_slide = $cur_slide.next();

    	if ($next_slide.next().next().length === 0)
    	{
    		$next_slide = $cur_slide.prev();
    	}

    		$cur_slide.slideUp(1000);
    		$next_slide.slideDown(1000);

    	$cur_slide.removeClass("first-slide");
    	$next_slide.addClass("first-slide");
    });

    //点击滑动大图左边按钮效果  
    $(".left").click(function() {
    	var $cur_slide = $(".first-slide");

    	var $next_slide = $cur_slide.next();

    	if ($next_slide.next().next().length === 0)
    	{
    		$next_slide = $cur_slide.prev();
    	}

    		$cur_slide.slideUp(1000);
    		$next_slide.slideDown(1000);

    	$cur_slide.removeClass("first-slide");
    	$next_slide.addClass("first-slide");
    });

    //菜单栏点击后滑动到页面指定位置效果
    $(".top-bar-li").first().click(function() {
        window.location.reload();
    });
	$(".top-bar-li").first().next().click(function() {
        $("html,body").animate({scrollTop:$(".sec-second").offset().top},600);
    });
    $(".top-bar-li").first().next().next().click(function() {
        $("html,body").animate({scrollTop:$(".sec-fourth").offset().top},600);
    });
    $(".top-bar-li").last().prev().click(function() {
        $("html,body").animate({scrollTop:$(".sec-fifth").offset().top},600);
    });
    $(".top-bar-li").last().click(function() {
        $("html,body").animate({scrollTop:$(".sec-seventh").offset().top},600);
    });



    //页面底部表格菜单点击后滑动到页面指定位置效果
    $(".tab-g").first().children().first().click(function() {
        $("html,body").animate({scrollTop:$(".sec-second").offset().top},600);
    });
    $(".tab-g").first().children().last().prev().click(function() {
        $("html,body").animate({scrollTop:$(".sec-first").offset().top},600);
    });
    $(".tab-g").first().children().last().click(function() {
        //战略伙伴
    });

    $(".tab-g").first().children().first().next().click(function() {
        $("html,body").animate({scrollTop:$(".sec-second").offset().top},600);
    });



    $(".tab-g").first().next().children().first().click(function() {
        $("html,body").animate({scrollTop:$(".sec-fourth").offset().top},600);
    });
    $(".tab-g").first().next().children().first().next().click(function() {
        $("html,body").animate({scrollTop:$(".sec-second").offset().top},600);
    });
    $(".tab-g").first().next().children().last().prev().click(function() {
        $("html,body").animate({scrollTop:$(".sec-first").offset().top},600);
    });
    $(".tab-g").first().next().children().last().click(function() {
        //官方微博
    });



    $(".tab-g").last().prev().children().first().click(function() {
        $("html,body").animate({scrollTop:$(".sec-fifth").offset().top},600);
    });
    $(".tab-g").last().prev().children().first().next().click(function() {
        $("html,body").animate({scrollTop:$(".sec-second").offset().top},600);
    });
    $(".tab-g").last().prev().children().last().prev().click(function() {
        $("html,body").animate({scrollTop:$(".sec-first").offset().top},600);
    });
    $(".tab-g").last().prev().children().last().click(function() {
        $("html,body").animate({scrollTop:$(".sec-seventh").offset().top},600);
    });



    $(".tab-g").last().children().first().click(function() {
        $("html,body").animate({scrollTop:$(".sec-seventh").offset().top},600);
    });
    $(".tab-g").last().children().first().next().click(function() {
        $("html,body").animate({scrollTop:$(".sec-second").offset().top},600);
    });
    $(".tab-g").last().children().last().click(function() {
        //友情链接
    });

});