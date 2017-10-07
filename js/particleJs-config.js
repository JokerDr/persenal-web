//
// requirejs.config({
//     paths: {
//         jquery:'jquery-1.11.2'
//     }
// });
//
// define(["jquery"],function($){
//     function ParticleJs(settings){
//         var defaultSettings = {
//           pJsFilePosition: "",
//           pJsFileName: ""
//         };
//         $.extend(defaultSettings,settings);
//     }
//     ParticleJs.prototype.init = function(){
//         var particlesJS = function(){
//             particlesJS.load(" pJsFileName "," pJsFilePosition ", function() {
//                 console.log('callback - particles.js config loaded');
//             });
//             }
//         return ParticleJs;
//     }
//
// });
//

particlesJS.load("particles-js"," json/particles.json ", function() {

});