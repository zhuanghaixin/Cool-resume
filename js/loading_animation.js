!function () {
//开头动画
    var view=View('#siteWelcome');
    // view.style.border="1px solid red";
    var controller={
        view:null,
        init:function (view) {
            this.view=view;
            setTimeout(this.deactive, 1000)  //有问题，但不知道为什么这么写是对的
        },
        deactive:function () {

            view.classList.remove('active');

        }
    }


    controller.init.call(controller,view);


}.call();

