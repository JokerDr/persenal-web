/**
 * Created by Administrator on 2017/10/15.
 */
requirejs.config({
    path:{
            jquery:'jquery.min',
            carousel:'carousel'
        }
});
//考虑到es6兼容性问题，并没有采用模板字符串，有时间再做QAQ，尽量做成单独的组件
define(["jquery"],function($){
    function ShowWork(settings){
        this.$filtering = $('<div class="filtering"></div>');
        this.$gallery = $('<div class="gallery"></div>');
        this.$img = $('<img alt="image">');
        this.$h4 = $('<h4></h4>');
        this.defaultSettings = {
            selector : "",
            selection :['All','Brand','Design','Photo','Video'],
            imgSrcAndName:[],
            speed : 1000,
            selectCount:4,
            itemCount:6
        }
        $.extend(this.defaultSettings,settings);
    }
    ShowWork.prototype.init=function(){
        $(this.defaultSettings.selector).append(this.$filtering);

        //动态创建分类数量
        for(var i=0;i<this.defaultSettings.selectCount;i++){
            var index = i;
            $('.filtering').append("<span>" + this.defaultSettings.selection[index] + "</span>");
        };
        $(this.defaultSettings.selector).append(this.$gallery);

        //动态创建展示的div的数量
        for(var i = 0;i<this.defaultSettings.itemCount; i++){
            $('.gallery').append('<div class="itemImg"></div>' );
        }
        $('.itemImg').append(this.$img);


        //向img标签内加入图片
        for(var i = 0;i<=this.defaultSettings.itemCount;i++){
            // var nowindex = i;
            $('.itemImg').find('img')[i].src = this.defaultSettings.imgSrcAndName[0] + "/" + this.defaultSettings.imgSrcAndName[1] + i + "." + this.defaultSettings.imgSrcAndName[2];
        }

        $('.itemImg').find('img').onmouseover(function(){

        })

    }
    return ShowWork;
})