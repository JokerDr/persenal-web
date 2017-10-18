
 requirejs.config({
     paths: {
         jquery:'jquery-1.11.2'
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
