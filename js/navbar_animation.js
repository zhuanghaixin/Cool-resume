!function () {
    var view = View('nav.menu')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();

        },
        bindEvents: function () {
            let liTages = view.querySelectorAll('ul>li');
            for (let i = 0; i < liTages.length; i++) {
                liTages[i].onmouseenter = function (e) {
                    let li = e.currentTarget;
                    // let brother=li.getElementsByTagName('ul')[0];
                    // let brother=a.nextSibling;
                    // while(brother.tagName!=='UL'){
                    //   brother=brother.nextSibling;
                    // }
                    //鼠标一进去就添加active类
                    li.classList.remove('vanish');
                    li.classList.add('active');
                }
                liTages[i].onmouseleave = function (e) {
                    let li = e.currentTarget;
                    // let brother=li.getElementsByTagName('ul')[0];
                    // let brother=a.nextSibling;
                    // while(brother.tagName!=='UL'){
                    //   brother=brother.nextSibling;
                    // }
                    //鼠标一进去就删除active类
                    // brother.classList.remove('active');
                    li.classList.add('vanish');
                    li.classList.remove('active');

                }
            }
        }

    }
    controller.init.call(controller, view);

}.call();



