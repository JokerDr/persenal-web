requirejs.config({
    path:{
        jquery:'jquery.min'
    }
})
define(['jquery'],function ($) {
    return{
        click:function () {
            $('.con-item').on('click',function () {
                if($(this.focus())){
                    $(this)
                }
            })
        }
    }
});