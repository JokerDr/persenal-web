/**
 * Created by Administrator on 2017/10/5.
 */
requirejs.config({
    path:{
        jquery:'jquery-1.11.2'
    }
});


define(["jquery"],function($){
    return {
        skills:
            function Skills(settings){
            var defaultSettings = {
                left:1100,
                color:"#03a9f4",
                animateDuring:1000,
                animateEasing:"linear",
                content:""
            };
            $.extend(defaultSettings,settings);//合并参数



                var $ofills[] = ducoment.getElementsByClassName("fill");
                var $scrollTop = 0;





               //  function getScrollTop(){
               //   if(document.documentElement&&document.documentElement.scrollTop){
               //       scrollTop=document.documentElement.scrollTop;
               //   }else if(document.body){
               //       scrollTop=document.body.scrollTop;
               //   }
               //   return scrollTop;
               // }







                // function getScrollTop(){
                //     var scrollTop=0;
                //     if(document.documentElement&&document.documentElement.scrollTop){
                //         scrollTop=document.documentElement.scrollTop;
                //     }else if(document.body){
                //         scrollTop=document.body.scrollTop;
                //     }
                //     return scrollTop;
                // }
            }

    };
});