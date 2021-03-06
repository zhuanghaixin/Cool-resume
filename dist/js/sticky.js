'use strict';

!function () {
    //粘贴的导航栏  ，自动高亮导航栏
    var view = View('#topNavBar');
    // view.style.border = "1px solid red";

    var controller = {
        view: null, // 一开始view是空的
        init: function init(view) {
            this.view = view; // 初始化将view形参传到这里面，使得view:null==>view:this.view
            this.bindEvents(); //绑定事件
            //this.bindEvents.call(this)
        },
        bindEvents: function bindEvents() {
            var _this = this;

            var view = this.view;
            // console.log(view);
            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    // console.log(this)  //此this 需要往外面找，找到var view=this.view中里面的this
                    _this.active();
                } else {
                    _this.deactive();
                }
            });
        },
        active: function active() {
            this.view.classList.add('sticky');
        },
        deactive: function deactive() {
            this.view.classList.remove('sticky');
        }
    };

    controller.init(view);
    //controller.init.call(controller,view);

}.call();