
requirejs.config({
    paths: {
        jquery:'jquery-1.11.2',

    }
});

define(["jquery","particles"],function($){
    function ParticleJs(settings){
        var defaultSettings = {
          pJsFilePosition: "",
          pJsFileName: ""
        };
        $.extend(defaultSettings,settings);
    }

    ParticleJs.prototype.init = function(){
            particlesJS.load(" pJsFileName ", " pJsFilePosition ", function() {
                alert("pJsFileName");
            });

    };
    return ParticleJs;
});


// particlesJS.load("particles-js"," json/particles.json ", function() {
//
// });