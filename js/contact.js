requirejs.config({
    path:{
        jquery:'jquery.min'
    }
})
define(['jquery'],function ($) {
    return{
        click:function Contact() {
            $('#contact').find('.content').mouseenter(function () {
                $('.con-item').on('click',function () {
                    console.log($(this).children('label'))
                    $(this).children('label').css({top:'-20%',color:'#03a9f4'}).siblings('input').css('border-bottom-color','#03a9f4');
                    $(this).find('textarea').css('border-bottom-color','#03a9f4');
                    $(this).siblings('.con-item').filter(function () {
                        if($(this).children(':first-child').val() !== ''){
                            $(this).find('textarea').css('border-bottom-color','#ccc');
                            $(this).children('label').css({top:'-20%',color:'#757575'}).siblings('input').css('border-bottom-color','#ccc');
                        }else{
                            $(this).find('textarea').css('border-bottom-color','#ccc');
                            $(this).children('label').css({top:0,color:'#757575'}).siblings('input').css('border-bottom-color','#ccc');
                        }
                    })
                })
            })
            $('#contact').find('.content').mouseleave(function () {
                $(this).children('.con-item').filter(function () {
                    //判断此时文本框是否有值
                    var a = $(this).children('label :nth-child(3)');
                    if($(this).children(':first-child').val() !== ''){
                        $(this).children(':first-child').blur();
                        $(this).children('label').css({top:'-20%',color:'#757575'}).siblings('input').css('border-bottom-color','#ccc');
                        $(this).find('textarea').css('border-bottom-color','#ccc');
                    }else{
                        $(this).children(':first-child').blur();
                        $(this).children('label').css({top:0,color:'#757575'}).siblings('input').css('border-bottom-color','#ccc');
                        $(this).find('textarea').css('border-bottom-color','#ccc');
                    }

                })
            })
        }
    }
});