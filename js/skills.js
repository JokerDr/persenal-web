/**
 * Created by Administrator on 2017/10/5.
 */
requirejs.config({
    path:{
        jquery:'jquery.min'
    }
});


define(["jquery"],function($){
        function Skills(settings){
            this.defaultSettings = {
                skillPercent:[],
                left:1100,
                color:"#03a9f4"
                // transitionDuring:1000,
                // content:""
            };
            $.extend(this.defaultSettings,settings);//合并参数
          }
           Skills.prototype.init = function(){
                var that = this;
               $(window).on('scroll',function () {
                    if(getClientHeight()*0.9 < getScrollTop()){
                        for(var  i in that.defaultSettings.skillPercent){
                            var num = Number(i)+1;
                            console.log('111');
                            $('.' + 'fill'+num).animate({width:that.defaultSettings.skillPercent[i]},1000);
                            $('.' + 'tip'+num).animate({
                                left:that.defaultSettings.skillPercent[i],
                                marginLeft:-34+'px'
                            },1000);
                        }
                        $('.fill').css('background',that.defaultSettings.color);
                    }

                });



               //窗口滚动条高度
               function getScrollTop()
               {
                   var scrollTop=0;
                   if(document.documentElement&&document.documentElement.scrollTop)
                   {
                       scrollTop=document.documentElement.scrollTop;
                   }
                   else if(document.body)
                   {
                       scrollTop=document.body.scrollTop;
                   }
                   return scrollTop;
               }
               //窗口可视范围高度
               function getClientHeight()
               {
                   var clientHeight=0;
                   if(document.body.clientHeight&&document.documentElement.clientHeight)
                   {
                       clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
                   }
                   else
                   {
                       clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
                   }
                   return clientHeight;
               }




           }
          return Skills;
})


// function getScrollTop(){
//     var scrollTop=0;
//     if(document.documentElement&&document.documentElement.scrollTop){
//         scrollTop=document.documentElement.scrollTop;
//     }else if(document.body){
//         scrollTop=document.body.scrollTop;
//     }
//     return scrollTop;
// }