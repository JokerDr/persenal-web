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
                skillName:[],
                left:1100,
                color:"#03a9f4"
            };
            $.extend(this.defaultSettings,settings);//合并参数
          }
           Skills.prototype.init = function(){
                var that = this;
               //进度条名称
                  for(var i in that.defaultSettings.skillName){
                  var bar = '#bar' + i;
                  var $skillname = $('<h6 class="skillName">$a</h6>');
                  $(bar).before($skillname);
                  $(bar).find('.tip')[0].innerText = that.defaultSettings.skillPercent[i]
                  $(bar).prev('h6')[0].innerText = that.defaultSettings.skillName[i] ;
                  }
                //插入进度条动画
               $(window).on('scroll',function () {
                    if(getClientHeight()*0.9 < getScrollTop()){
                        for(var  i in that.defaultSettings.skillPercent){
                            var num = Number(i)+1;
                            $('.' + 'fill'+num).animate({
                                width:that.defaultSettings.skillPercent[i]
                            },1000);
                            $('.' + 'tip'+num).animate({
                                left:that.defaultSettings.skillPercent[i],
                                marginLeft:-30+'px'
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