/**
 * Created by Administrator on 2017/10/15.
 */
requirejs.config({
    path:{
            jquery:'jquery.min',
            carousel:'carousel'
        }
});

define(["jquery"],function($){
    function Cilent(){
        this.defaultings = {
            speed:1000,
            
        }
    }

})