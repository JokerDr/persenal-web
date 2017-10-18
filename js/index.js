
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

require(["jquery","particleJs-config"],function($,ParticleJs){
    var settings1 = {
        pJsFilePosition:"json/particles.json",
        pJsFileName:"particles-js"
    };
    var particleJsConfig = new ParticleJs(settings1);
    particleJsConfig.init();
});
//
// require(["jquery","skills"],function($,Skills){
//         var settings2 = {
//             left:1100,
//             color:"#03a9f4",
//             animateDuring:1000,
//             animateEasing:"linear",
//             content:""
//         }
// });
