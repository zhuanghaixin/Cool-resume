/**
 var controller=Controller({
    init:(){
        this.xxx();
        this.yyy();
    },
    xxx(){

    },
    yyy(){
    }
})

 **/


window.Controller = function (options) {
    var init=options.init;
    var object={
        view: null,
        model: null,
        init: function (view, model) {
            // console.log(this);
            this.view = view;
            this.model = model;
            this.model.init();
            init.call(this,view,model);
            this.bindEvents();   //这里面所有的this 都是object,导致message.js var controller=Controller()  init: this 变为object，但object没有messageList，form,loadMessage,所以我们需要拷贝，下面循环就是拷贝
        }
    }

    for(let key in options){
        if(key!=='init'){
            object[key]=options[key];
        }
    }

    return object
}
