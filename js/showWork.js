/**
 * Created by Administrator on 2017/10/15.
 */
requirejs.config({
    path:{
            jquery:'jquery.min'
        }
});
//没有采用模板字符串，有时间再做QAQ，尽量做成单独的组件
define(["jquery"],function($){
    function ShowWork(settings){
        this.$filtering = $('<div class="filtering"></div>');
        this.$gallery = $('<div class="gallery"></div>');
        this.$img = $('<img alt="image">');
        this.$h4 = $('<h4></h4>');
        this.$a =$('<a><i></i></a>')
        this.defaultSettings = {
            selector : "",
            selection :[],
            itemName:[],
            itemClass:[],
            itemAddress:[],
            imgSrcAndName:[],
            fontAwesomeName:'',
            speed : 1000,
            selectCount:4,
            itemCount:6
        }
        $.extend(this.defaultSettings,settings);
    }
    ShowWork.prototype.init=function(){
        $(this.defaultSettings.selector).append(this.$filtering);
        //动态创建分类数量
        for(var i=0;i<this.defaultSettings.selectCount;i++){
            var index = i;
            $('.filtering').append("<span>" + this.defaultSettings.selection[index] + "</span>");

        }
        //切换分类时，隐藏其他分类的div
        $('.filtering').children('span').on('click',function () {
            var name = this.innerText;
            $('.itemImg').filter(function (index) {

                if(this.className.match(name)){

                    $(this).css('display','block');

                }else if(name == 'All'){
                    $(this).children('img').css('display','block');

                }else{

                    $(this).css('display','none');
                }
            })
        });
        $(this.defaultSettings.selector).append(this.$gallery);
        //动态创建展示的div的数量
        for(var i = 0;i<this.defaultSettings.itemCount; i++){
            $('.gallery').append('<div class="itemImg"></div>' );
        }
        $('.itemImg').append(this.$img);
        $('.itemImg').append(this.$h4).append(this.$a);
        $('.itemImg').find('i').addClass(this.defaultSettings.fontAwesomeName);
        //向<img>里添加图片,向h4里添加名字，添加链接
        for(var i = 0;i<this.defaultSettings.itemCount;i++){
            addClass( $('.gallery').children()[i], this.defaultSettings.itemClass[i]);
            $('.itemImg').find('a')[i].href = this.defaultSettings.itemAddress[i];
            $('.itemImg').find('h4')[i].innerText = this.defaultSettings.itemName[i];
            $('.itemImg').find('img')[i].src = this.defaultSettings.imgSrcAndName[0] + "/" + this.defaultSettings.imgSrcAndName[1] + i + "." + this.defaultSettings.imgSrcAndName[2];
            add (i);
        }
        //封装一个addclass函数
        function addClass(obj, cls){
            var obj_class = obj.className;  //获取 class 内容.
            var blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
            var added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
            obj.className = added;//替换原来的 class.
        }
        function add (index) {
            if(window.addEventListener){
                $('.itemImg')[index].addEventListener('mouseover',function(){
                    $(this).addClass('imgmask');
                    gotVal('scale(1.4)','0','rotateX(0deg)','3','50%',index);
                });
                $('.itemImg')[index].addEventListener('mouseout',function(){
                    $(this).removeClass('imgmask');
                    gotVal('scale(1)','-20%','rotateX(90deg)','-1','0',index);
                });
            }else{
                $('.itemImg')[index].attachEvent('onmouseover',function () {
                    $(this).addClass('imgmask');
                    gotVal('scale(1.4)','0','rotateX(0deg)','3','50%',index);
                });
                $('.itemImg')[index].attachEvent('onmouseover',function(){
                    $(this).removeClass('imgmask');
                    gotVal('scale(1)','-20%','rotateX(90deg)','-1','0',index);
                });
            }
         }
         function gotVal(a,b,c,d,e,index){
             $('.itemImg').find('img')[index].style.transform = a;
             $('.itemImg').find('h4')[index].style.left = b;
             $('.itemImg').find('h4')[index].style.transform = c;
             $('.itemImg').find('a')[index].style.zIndex = d;
             $('.itemImg').find('a')[index].style.bottom = e;
         }
    }
    return ShowWork;
});