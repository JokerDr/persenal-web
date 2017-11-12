/**
 * Created by Administrator on 2017/10/5.
 */
requirejs.config({
    path:{
        jquery:'jquery-1.11.2'
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
                // animated(function () {

                // },1000,function () {
                    
                // });
               for(var  i in this.defaultSettings.skillPercent){
                   var num = Number(i)+1;

                   $('.' + 'fill'+num).css('width',this.defaultSettings.skillPercent[i]);
                   $('.' + 'tip'+num).css('left',this.defaultSettings.skillPercent[i]);
                   $('.' + 'tip'+num).css('margin-left',-34+'px');
               }
               $('.fill').css('background',this.defaultSettings.color);
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