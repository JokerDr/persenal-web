requirejs.config({
    path:{
        jquery:'jquery.min'
    }
});
define(['jquery'],function($){
    function HappyClients(settings) {
        this.$dots = $('<div class="dots"></div>');
        this.defaultSettings={
            contentP:[],
            contentH6:[],
            contentH5:[]

        };
        $.extend(this.defaultSettings,settings);
    }
    HappyClients.prototype.init=function () {
    // console.log(this.$div);
        $('.client-say').append('<div class="outer"></div>');
        $('.client-say').append(this.$dots);

        for(var i=0;i<3;i++){
            $('.outer').append('<div class="client-item"><p></p><h6></h6><h5></h5></div>');
            $('.dots').append('<div class="client-item"><p></p><h6></h6><h5></h5></div>');
        }
    }
    return HappyClients;
});