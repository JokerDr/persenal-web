
 requirejs.config({
     paths: {
         jquery:'jquery.min'
     }
 });

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


require(["particles"],function(){
    particlesJS.load("particles-js", " json/particles.json ", function () {
    })
});


 require(['jquery','skills'],function($,Skills){
        var settings1 = {
            skillPercent:['75%','95%','70%','80%'],
             color:"#03a9f4",
            left:1400
        };
        var Skills1 = new Skills(settings1);
        Skills1.init();
 });
