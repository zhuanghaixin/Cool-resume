!function () {
    var view = document.querySelector('nav.menu');
    // view.style.border = "1px solid red";
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;

            this.initAnimation(); //初始化动画
            this.bindEvents.call(this); //绑定事件
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            requestAnimationFrame(animate);
        },
        scrollToElement:function(element){
            let top = element.offsetTop;
            // console.log(top);
            // window.scrollTo(0,top-80);
            let currentTop = window.scrollY;
            let targetTop = top - 80;
            let i = 0;
            let distance = targetTop - currentTop;//每次动的距离
            let t = Math.abs(distance / 100) * 500; //时间
            if (t > 500) {
                t = 500;
            }
            var coords = {y: currentTop}; //起始位置
            var tween = new TWEEN.Tween(coords) //起始位置
                .to({y: targetTop}, t) //结束位置和时间
                .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
                .onUpdate(function () {
                    console.log(1);
                    window.scrollTo(0, coords.y); //如何更新界面
                })
                .start(); // 开始缓动
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('ul>li>a');
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x)=>{
                    // console.log("currentTop点击   "+window.scrollY);
                    x.preventDefault();
                    let a = x.currentTarget;
                    let href = a.getAttribute('href');
                    // console.log(href);
                    let element = document.querySelector(href);
                    // console.log(element);
                    // let tops=element.scrollTop;
                    // console.log("scrollTop"+tops);
                    // controller.scrollToElement(element);
                    this.scrollToElement(element);


                }
            }
        }
    }


    controller.init.call(controller, view);

}.call();



