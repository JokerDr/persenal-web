 requirejs.config({
     paths: {
         jquery:'jquery.min'
     }
 });

//个人相册
 require(["jquery", "carousel"], function($, Carousel){
     var settings1 = {
         selector : ".my-photo",
         imgArr : ["img/main-bg2.jpg", "img/main-bg.png"],
         speed : 2000,
         btnStyle : "circle",
         arrowPos : "center"
     };
     var carousel1 = new Carousel(settings1);
     carousel1.init();
 });
// 蒲公英效果
require(["particles"],function(){
    particlesJS.load("particles-js", " json/particles.json ", function () {
    })
});
//技能条
 require(['jquery','skills'],function($,Skills){
        var settings1 = {
            skillPercent:['75%','95%','60%','80%'],
            skillName:['HTML','CSS','JavaScript','Vue'],
             color:"#03a9f4",
            left:1400
        };
        var Skills1 = new Skills(settings1);
        Skills1.init();
 });
//照片墙
 require(['jquery','showWork'],function($,ShowWork){
        var settings1 = {
            selector : "#portfolio .row",                                     //要求加上‘#’、‘.’等选择器标识符。
            selection :['All','Brand','Design','Photo','Video'],              //类名，第一个必须是All
            itemName:["个人网站","旋转阴阳鱼","3","4","5","6"],                    //项目名
            itemClass:['Brand','Design','Photo','Video','Brand','Design'],      //图片分类
            itemAddress:[
                'https://github.com/JokerDr/persenal-web',
                'https://github.com/JokerDr/css3-',
                '',
                '',
                '',
                ''],
            imgSrcAndName:['img/showImg','s','jpg'],     //如s1.jpg,s2.jpg,只需要传入s,另外尽量传入和itemCount相同数量的图片
            speed : 1000,
            fontAwesomeName:'fa fa-search',
            selectCount:5,
            itemCount:6
        };
        var ShowWork1 = new ShowWork(settings1);
        ShowWork1.init();
 });