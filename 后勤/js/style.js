$(document).ready(function(){
    $(".js-fd-menu-nav").click(function(){
        $(".js-fd-menu-nav-list").slideToggle(100);

    });
   $('.js-fd-menu-nav-list .js-fd-menu-nav-list-1').click(function () {
    $('.js-fd-menu-nav-list .js-fd-menu-nav-list-1').css("color","#515151");
    $('.js-fd-menu-nav-list .js-fd-menu-nav-list-1').css("background-color","#eeeeee");
    $(this).css("background-color","#949596");
    $(this).css("color","white");
    var index = $(this).index()+1;
   var classname= ".fd-menu-right-"+index;

       $(".fd-menu-right-1").css("display","none");
       $(".fd-menu-right-2").css("display","none");
       $(".fd-menu-right-3").css("display","none");
       $(classname).css("display","block");
   })
    $('.js-fd-menu-nav').click(function(){
        if($(this).find('img').attr('src')=='../images/nav-check.jpg'){
            $(this).find('img').attr('src','../images/nav-checked.jpg');
            $(".js-fd-menu-nav-text").css("color","white");
        }else{
            $(this).find('img').attr('src','../images/nav-check.jpg');
            $(".js-fd-menu-nav-text").css("color","#515151");
        }
    });

    $(".js-fd-tk-title-logo").click(function(){
        $("#js-fd-mask").css("display","none");

    });


    $(".js-fd-tk-quxiao").click(function(){
        $("#js-fd-mask").css("display","none");

    });
    $(".js-fd-bianji").click(function(){
        $("#js-fd-mask").css("display","inline-block");

    });
    $('.js-fd-tk-box').find('input[type=checkbox]').bind('click', function(){

        $('.js-fd-tk-box').find('input[type=checkbox]').not(this).attr("checked", false);

    });
    $(".js-fd-tk-img").click(function () {
        $(".js-fd-option").slideDown(100);
    });
    $(".js-fd-option1").click(function () {
        $(".js-fd-select").empty();
        var html=$(".js-fd-option1").html();
        $(".js-fd-select").append(html);
        $(".js-fd-option").slideUp(100);
    });
    $(".js-fd-option2").click(function () {
        $(".js-fd-select").empty();
        var html=$(".js-fd-option2").html();
        $(".js-fd-select").append(html);
        $(".js-fd-option").slideUp(100);
    });
    $(".js-fd-option3").click(function () {
        $(".js-fd-select").empty();
        var html=$(".js-fd-option3").html();
        $(".js-fd-select").append(html);
        $(".js-fd-option").slideUp(100);
    });
    $(".js-fd-tk-img1").click(function () {
        $(".js-fd-option01").slideDown(100);
    });
    $(".js-fd-option4").click(function () {
        $(".js-fd-select1").empty();
        var html=$("#js-fd-option1").html();
        $(".js-fd-select1").append(html);
        $(".js-fd-option01").slideUp(100);
    });
    $(".js-fd-option5").click(function () {
        $(".js-fd-select1").empty();
        var html=$("#js-fd-option2").html();
        $(".js-fd-select1").append(html);
        $(".js-fd-option01").slideUp(100);
    });
    $(".js-fd-option6").click(function () {
        $(".js-fd-select1").empty();
        var html=$("#js-fd-option3").html();
        $(".js-fd-select1").append(html);
        $(".js-fd-option01").slideUp(100);
    });


});







