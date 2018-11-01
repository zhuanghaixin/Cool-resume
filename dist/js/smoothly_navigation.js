'use strict';

!function () {
    var view = View('nav.menu');
    // view.style.border = "1px solid red";
    var controller = {
        view: null,
        init: function init(view) {
            this.view = view;

            this.initAnimation(); //初始化动画
            this.bindEvents.call(this); //绑定事件
        },
        initAnimation: function initAnimation() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            requestAnimationFrame(animate);
        },
        scrollToElement: function scrollToElement(element) {
            var top = element.offsetTop;
            // console.log(top);
            // window.scrollTo(0,top-80);
            var currentTop = window.scrollY;
            var targetTop = top - 80;
            var i = 0;
            var distance = targetTop - currentTop; //每次动的距离
            var t = Math.abs(distance / 100) * 500; //时间
            if (t > 500) {
                t = 500;
            }
            var coords = { y: currentTop }; //起始位置
            var tween = new TWEEN.Tween(coords) //起始位置
            .to({ y: targetTop }, t) //结束位置和时间
            .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
            .onUpdate(function () {
                console.log(1);
                window.scrollTo(0, coords.y); //如何更新界面
            }).start(); // 开始缓动
        },
        bindEvents: function bindEvents() {
            var _this = this;

            var aTags = this.view.querySelectorAll('ul>li>a');
            for (var i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    // console.log("currentTop点击   "+window.scrollY);
                    x.preventDefault();
                    var a = x.currentTarget;
                    var href = a.getAttribute('href');
                    // console.log(href);
                    var element = document.querySelector(href);
                    // console.log(element);
                    // let tops=element.scrollTop;
                    // console.log("scrollTop"+tops);
                    // controller.scrollToElement(element);
                    _this.scrollToElement(element);
                };
            }
        }
    };

    controller.init.call(controller, view);
}.call();