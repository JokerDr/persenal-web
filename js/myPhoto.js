/**
 * Created by Administrator on 2017/10/15.
 */
requirejs.config({
    path:{
        jquery:'jquery.min',
        carousel:'carousel'
    }
});

define(["jquery","carousel"],function($){
    function MyPhoto(settings){
        this.defaultSettings = {
            selector : document.body,
            conArr : [],
            speed : 1000,
            btnStyle : "square",//circle
            arrowPos : "bottom"//center
        };
        $.extend(this.defaultSettings, settings);
    }
})